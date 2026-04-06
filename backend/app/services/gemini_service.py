import os
import httpx
import time
import google.generativeai as genai
from typing import Optional, List, Dict, Any, Tuple
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

class GeminiService:
    """
    FRESH 2025 AI SERVICE IMPLEMENTATION - DIRECT GOOGLE API
    
    Features:
    1. Direct Google Access: Uses `google-generativeai` for 15 RPM Free Tier.
    2. Fallback Support: Keeps OpenRouter for specific models if needed.
    3. Multi-modal: Native image support via Gemini.
    """

    def __init__(self):
        # Primary Keys
        self.free_key = settings.FREE_GEMINI_API_KEY
        self.paid_key = settings.PAID_GEMINI_API_KEY
        
        # Configure Google GenAI
        if self.free_key:
            genai.configure(api_key=self.free_key)
        
        # Fallback Keys (OpenRouter)
        self.gemma_key = settings.GEMMA_API_KEY
        self.llama_key = settings.LLAMA_API_KEY
        
        self.base_url = settings.OPENROUTER_BASE_URL
        self.default_model = "gemini-2.5-flash" # Updated for 2026

    def _get_execution_plan(self, user: Any = None, is_complex: bool = False) -> List[Tuple[str, str, str]]:
        """
        Determines the plan of (PROVIDER, API_KEY, MODEL) triples to try.
        Provider: 'google' or 'openrouter'
        """
        is_premium = getattr(user, "is_premium", False) or getattr(user, "subscription_status", "free") == "active"
        
        plan = []
        
        # Primary: Google Direct (Fast, Free/Paid)
        if is_premium and self.paid_key:
             # Paid Pro -> Free Flash
             plan.append(("google", self.paid_key, "gemini-2.5-pro"))
             plan.append(("google", self.free_key, "gemini-2.5-flash"))
        else:
             # Free Flash
             plan.append(("google", self.free_key, "gemini-2.5-flash"))
             
        # Fallbacks (OpenRouter)
        if self.gemma_key:
            plan.append(("openrouter", self.gemma_key, "google/gemma-2-9b-it:free"))
        if self.llama_key:
            plan.append(("openrouter", self.llama_key, "meta-llama/llama-3.3-70b-instruct:free"))
            
        return plan

    def get_embeddings(self, text: str, task_type: str = "retrieval_document") -> List[float]:
        """
        Generates embeddings for the given text using Gemini.
        Returns a list of floats (vector).
        """
        if not self.free_key:
            logger.error("Gemini API key missing for embeddings")
            return []

        try:
            genai.configure(api_key=self.free_key)
            result = genai.embed_content(
                model="models/gemini-embedding-001",
                content=text,
                task_type=task_type,
                title="Knowledge Graph Node" if task_type == "retrieval_document" else None
            )
            return result['embedding']
        except Exception as e:
            logger.error(f"Gemini Embeddings Error: {e}")
            return []

    def get_embeddings_batch(self, texts: List[str], task_type: str = "retrieval_document") -> List[List[float]]:
        """
        Generates embeddings for a list of texts in batch.
        Note: Handles 15 RPM free tier limits by sleeping if needed.
        """
        if not texts: return []
        
        results = []
        # Free tier is 15 RPM. For 200 nodes, we might need multiple batches.
        # However, genai.embed_content supports multiple contents in one call (up to 100 usually)
        
        try:
            genai.configure(api_key=self.free_key)
            
            # Process in chunks of 50 to avoid payload limits
            chunk_size = 50
            for i in range(0, len(texts), chunk_size):
                chunk = texts[i:i + chunk_size]
                batch_result = genai.embed_content(
                    model="models/gemini-embedding-001",
                    content=chunk,
                    task_type=task_type
                )
                results.extend(batch_result['embedding'])
                
            return results
        except Exception as e:
            logger.error(f"Gemini Batch Embeddings Error: {e}")
            # Fallback to sequential if batch fails
            sequential_results = []
            for t in texts:
                # Add delay to stay within 15-100 RPM limits
                time.sleep(1.0)
                emb = self.get_embeddings(t, task_type)
                # Ensure we always return a vector of the same dimension even on error
                if not emb:
                    emb = [0.0] * 768 # Default dimension for embedding-001
                sequential_results.append(emb)
            return sequential_results

    def _call_google(self, api_key: str, model_name: str, messages: List[Dict[str, str]], temperature: float) -> str:
        """Call Google Generic AI SDK"""
        # Configure specifically for this call (in case of multiple keys)
        genai.configure(api_key=api_key)
        
        # Convert OpenAI format messages to Gemini format
        # User -> user, Assistant -> model
        history = []
        system_instruction = None
        current_user_message = ""

        for msg in messages:
            role = msg["role"]
            content = msg["content"]
            
            if role == "system":
                system_instruction = content
            elif role == "user":
                current_user_message = content # Last message is the prompt
            elif role == "assistant":
                history.append({"role": "model", "parts": [content]})
            else: # previous user messages
                 history.append({"role": "user", "parts": [content]})

        # Instantiate Model
        model = genai.GenerativeModel(
            model_name=model_name,
            system_instruction=system_instruction
        )
        
        # Generate
        # Note: Gemini python lib chat history is stateful, but here we just want generation
        # passing history as 'contents' if needed, generally usually just text generation for simple usage
        # or chat.
        
        generation_config = genai.types.GenerationConfig(
            temperature=temperature,
            candidate_count=1,
        )
        
        if history:
             chat = model.start_chat(history=history)
             response = chat.send_message(current_user_message, generation_config=generation_config)
             return response.text
        else:
             response = model.generate_content(current_user_message, generation_config=generation_config)
             return response.text


    def _call_openrouter_sync(self, api_key: str, model: str, messages: List[Dict[str, str]], temperature: float, max_tokens: int) -> str:
        """Sync version of the OpenRouter API caller"""
        if not api_key:
            raise ValueError("Missing OpenRouter API Key")

        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://eduecosystem.com",
            "X-Title": "Eduecosystem",
        }
        
        payload = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
        }

        with httpx.Client(timeout=60.0) as client:
            response = client.post(f"{self.base_url}/chat/completions", headers=headers, json=payload)
            if response.status_code == 200:
                data = response.json()
                if "choices" in data and len(data["choices"]) > 0:
                     return data["choices"][0]["message"]["content"]
                return "Empty response from AI"
            else:
                raise Exception(f"OpenRouter Error {response.status_code}: {response.text}")

    def generate_text(self, prompt: str, user: Any = None, is_complex: bool = False, temperature: float = 0.7, max_tokens: int = 2000) -> str:
        """Generates text with cascading fallback mechanism"""
        messages = [{"role": "user", "content": prompt}]
        plan = self._get_execution_plan(user, is_complex)
        
        last_error = "No API keys configured"
        
        for provider, api_key, model in plan:
            try:
                if not api_key: continue
                
                if provider == "google":
                    return self._call_google(api_key, model, messages, temperature)
                else:
                    return self._call_openrouter_sync(api_key, model, messages, temperature, max_tokens)
                    
            except Exception as e:
                last_error = str(e)
                logger.warning(f"Fallback: {provider}/{model} failed. Error: {e}")
                continue
        
        return f"AI Service Unavailable. Last error: {last_error}"

    def analyze_image(self, image_path: str, prompt: str, user: Any = None, temperature: float = 0.4) -> str:
        """Analyze image using Gemini Vision"""
        import PIL.Image
        
        plan = self._get_execution_plan(user, is_complex=True)
        # Filter for Google only
        google_plan = [p for p in plan if p[0] == "google"]
        
        last_error = ""
        
        # Load Image once
        try:
             print(f"DEBUG: Processing image at {image_path}")
             img = PIL.Image.open(image_path)
        except Exception as e:
             print(f"DEBUG: Image Load Error: {e}")
             return f"Error loading image: {e}"

        print(f"DEBUG: Google Plan length: {len(google_plan)}")
        for provider, api_key, model in google_plan:
            try:
                if not api_key: 
                    print(f"DEBUG: Missing API Key for {model}")
                    continue
                MASKED_KEY = api_key[:4] + "..." + api_key[-4:]
                print(f"DEBUG: Calling Google {model} with key {MASKED_KEY}")
                
                genai.configure(api_key=api_key)
                m = genai.GenerativeModel(model)
                response = m.generate_content([prompt, img])
                print("DEBUG: Google Response Received")
                return response.text
            except Exception as e:
                last_error = str(e)
                print(f"DEBUG: Google Error: {e}")
                
                # Check for key validity issues
                if "API key not valid" in last_error or "API key was reported as leaked" in last_error or "403" in last_error:
                    return f"API_ERROR: {last_error}"
                
                continue
                
        return f"Image Analysis Error: {last_error}"

    def compare_images(self, image_path1: str, image_path2: str, prompt: str, user: Any = None, temperature: float = 0.4) -> str:
        """Compare two images using Gemini Vision"""
        import PIL.Image
        
        plan = self._get_execution_plan(user, is_complex=True)
        # Filter for Google only
        google_plan = [p for p in plan if p[0] == "google"]
        
        last_error = ""
        
        # Load Images
        try:
             print(f"DEBUG: Comparing images: {image_path1} vs {image_path2}")
             img1 = PIL.Image.open(image_path1)
             img2 = PIL.Image.open(image_path2)
        except Exception as e:
             print(f"DEBUG: Image Load Error: {e}")
             return f"Error loading images: {e}"

        for provider, api_key, model in google_plan:
            try:
                if not api_key: continue
                
                genai.configure(api_key=api_key)
                m = genai.GenerativeModel(model)
                # Pass both images
                response = m.generate_content([prompt, img1, img2])
                return response.text
            except Exception as e:
                last_error = str(e)
                print(f"DEBUG: Google Compare Error: {e}")
                continue
                
        return f"Image Comparison Error: {last_error}"

    def chat(self, messages: List[Dict[str, str]], user: Any = None, system_prompt: Optional[str] = None, temperature: float = 0.7) -> str:
        """Multi-turn chat"""
        # Inject system prompt into messages if needed for consistent format
        api_messages = []
        if system_prompt:
            api_messages.append({"role": "system", "content": system_prompt})
        api_messages.extend(messages)

        plan = self._get_execution_plan(user, is_complex=False)
        
        last_error = ""
        for provider, api_key, model in plan:
            try:
                if not api_key: continue
                if provider == "google":
                    return self._call_google(api_key, model, api_messages, temperature)
                else:
                    return self._call_openrouter_sync(api_key, model, api_messages, temperature, 1000)
            except Exception as e:
                last_error = str(e)
                continue
        
        return f"Chat Error: {last_error}"

    def analyze_comprehension(self, student_summary: str, key_concepts: List[str], user: Any = None) -> Dict[str, Any]:
        """FSRS Retention Analysis"""
        prompt = f"""You are an educational assessment AI. Analyze score/1.0 and grade(1-4).
JSON ONLY:
{{
    "score": 0.XX,
    "grade": X,
    "missing_concepts": [],
    "feedback": "string"
}}
Concepts: {key_concepts}
Student: {student_summary}"""

        try:
            response = self.generate_text(prompt, user=user, is_complex=False, temperature=0.3)
            
            # Simple cleanup for markdown json
            import json
            clean = response.replace("```json", "").replace("```", "").strip()
            result = json.loads(clean)
            return result
        except Exception as e:
             print(f"Analysis error: {e}")
             return {"score": 0.5, "grade": 2, "feedback": "AI Error", "missing_concepts": []}

    def transcribe_audio(self, audio_base64: str) -> str:
        """Transcribe audio using Gemini's multimodal capability."""
        import base64
        
        prompt = """Transcribe the following audio recording exactly as spoken. 
Return ONLY the transcription text, nothing else."""
        
        try:
            # For audio, we need to handle it as a file upload or use a specialized endpoint
            # Gemini 1.5 supports audio in the API
            genai.configure(api_key=self.free_key)
            model = genai.GenerativeModel("gemini-1.5-flash")
            
            # Create audio part
            audio_bytes = base64.b64decode(audio_base64)
            audio_part = {
                "mime_type": "audio/webm",
                "data": audio_bytes
            }
            
            response = model.generate_content([prompt, audio_part])
            return response.text.strip()
        except Exception as e:
            print(f"Audio transcription error: {e}")
            return "[Audio transcription failed]"

    def evaluate_recall(self, original_text: str, student_recall: str) -> Dict[str, Any]:
        """Compare student's recall with original text and identify gaps."""
        prompt = f"""You are an educational assessment AI. Compare the student's recall with the original text.

ORIGINAL TEXT:
{original_text}

STUDENT'S RECALL:
{student_recall}

Analyze what the student remembered correctly and what they missed.
Return JSON ONLY in this exact format:
{{
    "score": 0-100 (percentage of key points recalled),
    "recalled_points": ["point1", "point2", ...],
    "missing_points": ["missed1", "missed2", ...],
    "feedback": "Brief encouraging feedback with specific improvement tips"
}}

Focus on main concepts, facts, and key details. Be fair but accurate."""

        try:
            response = self.generate_text(prompt, is_complex=False, temperature=0.3)
            
            import json
            clean = response.replace("```json", "").replace("```", "").strip()
            result = json.loads(clean)
            return result
        except Exception as e:
            print(f"Recall evaluation error: {e}")
            return {
                "score": 50,
                "recalled_points": [],
                "missing_points": ["Evaluation failed"],
                "feedback": "We couldn't analyze your recall. Please try again."
            }

    def evaluate_mains_answer(self, image_bytes: bytes, question: str) -> Dict[str, Any]:
        """Evaluates a handwritten mains answer using Vision API."""
        import PIL.Image
        import io
        import json
        
        try:
            img = PIL.Image.open(io.BytesIO(image_bytes))
        except Exception as e:
            return {"error": f"Invalid image: {e}", "scores": {"total": 0}}

        prompt = f"""You are a strict UPSC Examiner. Evaluate this handwritten answer for the following question:
QUESTION: "{question}"

Evaluate on these parameters (score 0-10, be strict):
1. Introduction (Relevance, conciseness)
2. Body (Content depth, multidimensional coverage, keywords)
3. Structure (Flow, subheadings, diagrams/maps usage)
4. Conclusion (Way forward, balanced view)

Return JSON ONLY in this exact format:
{{
    "scores": {{
        "introduction": 0,
        "body": 0,
        "structure": 0,
        "conclusion": 0,
        "total": 0
    }},
    "feedback": {{
        "strengths": ["point 1", "point 2"],
        "weaknesses": ["point 1", "point 2"],
        "improvements": ["specific advice 1", "specific advice 2"]
    }},
    "model_answer_summary": "Brief summary of what the ideal answer should have covered."
}}"""

        # Reuse Google Plan logic for Vision
        genai.configure(api_key=self.free_key)
        model = genai.GenerativeModel("gemini-1.5-flash") # Vision capable and fast
        
        try:
            response = model.generate_content([prompt, img])
            text = response.text
            clean = text.replace("```json", "").replace("```", "").strip()
            return json.loads(clean)
        except Exception as e:
            print(f"Mains Eval Error: {e}")
            return {
                "scores": {"total": 0},
                "feedback": {"error": str(e)},
                "model_answer_summary": "Evaluation failed."
            }

    def analyze_audio(self, audio_base64: str, context: str = "General Speaking Practice") -> Dict[str, Any]:
        """
        Analyze audio for pronunciation, tone, confidence and content using Gemini 1.5 Flash.
        Returns a structured assessment.
        """
        import base64
        import json
        
        prompt = f"""You are an expert Voice Coach and AI Tutor. 
        Context: {context}
        
        Analyze the attached audio recording. 
        1. Transcribe what was said.
        2. Evaluate Pronunciation (Clarity, enunciation).
        3. Evaluate Tone (Confidence, emotion, pace).
        4. Provide specific, constructive feedback.
        
        Return JSON ONLY in this format:
        {{
            "transcription": "text",
            "metrics": {{
                "pronunciation_score": 0-10,
                "confidence_score": 0-10,
                "clarity_score": 0-10
            }},
            "feedback": {{
                "strengths": ["point 1", "point 2"],
                "improvements": ["tip 1", "tip 2"]
            }},
            "overall_assessment": "Short summary sentence."
        }}
        """
        
        try:
            # Re-use free key for Flash model
            genai.configure(api_key=self.free_key)
            model = genai.GenerativeModel("gemini-1.5-flash")
            
            # Decode audio
            audio_bytes = base64.b64decode(audio_base64)
            audio_part = {
                "mime_type": "audio/webm",
                "data": audio_bytes
            }
            
            response = model.generate_content([prompt, audio_part])
            text = response.text
            clean = text.replace("```json", "").replace("```", "").strip()
            return json.loads(clean)
            
        except Exception as e:
            print(f"Audio Analysis Error: {e}")
            return {
                "transcription": "[Error analyzing audio]",
                "metrics": {
                    "pronunciation_score": 0,
                    "confidence_score": 0,
                    "clarity_score": 0
                },
                "feedback": {
                    "strengths": [],
                    "improvements": ["System error occurred during analysis."]
                },
                "overall_assessment": f"Error: {str(e)}"
            }

    def analyze_handwriting_traits(self, image_base64: str) -> Dict[str, Any]:
        """
        Quick vision analysis for AR overlay. Returns concise traits.
        """
        import base64
        import json
        
        prompt = """Analyze this handwriting sample for graphology traits. 
        Return strictly JSON with:
        {
            "traits": [
                {"name": "Trait Name", "description": "Short description", "type": "positive/negative/neutral"}
            ],
            "overlay_coords": [
                 {"x": 10, "y": 20, "label": "High Goals"} 
            ] (Simulate where these traits appear on the page roughly)
        }
        Keep descriptions very short (max 5 words). Max 5 key traits.
        """
        
        try:
             # Re-use free key for Flash model
            genai.configure(api_key=self.free_key)
            model = genai.GenerativeModel("gemini-1.5-flash")
            
            # Decode audio
            image_bytes = base64.b64decode(image_base64)
            image_part = {
                "mime_type": "image/jpeg",
                "data": image_bytes
            }
            
            response = model.generate_content([prompt, image_part])
            text = response.text
            clean = text.replace("```json", "").replace("```", "").strip()
            return json.loads(clean)
        except Exception as e:
            print(f"Grapho Vision Error: {e}")
            return {"traits": [], "overlay_coords": []}

    # ─────────────────────────────────────────────────────────────────
    # GEOGRAPHY SUB-TOPIC TAXONOMY
    # Maps geography domains to their specific UPSC keyword clusters.
    # Used by auto_tag_upsc_topics for granular Geography classification.
    # ─────────────────────────────────────────────────────────────────
    GEOGRAPHY_SUBTOPIC_MAP = {
        "Geomorphology": ["landform", "erosion", "plateau", "fold", "fault", "rift", "valley", "delta", "floodplain", "meander", "badland", "ravine", "karst", "glacier", "moraine", "esker", "drumlin", "cirque"],
        "Climatology": ["monsoon", "rainfall", "climate", "temperature", "humidity", "drought", "cyclone", "El Nino", "La Nina", "ITCZ", "jet stream", "wind", "pressure", "westerlies", "trade winds", "precipitation"],
        "Rivers & Drainage": ["river", "tributary", "distributary", "basin", "confluence", "source", "origin", "estuary", "dam", "barrage", "reservoir", "waterfall", "canal", "drainage", "watershed", "prayag", "sangam"],
        "Soils": ["soil", "laterite", "alluvial", "black cotton", "regur", "red soil", "saline", "alkaline", "humus", "pedology", "erosion"],
        "Natural Vegetation & Forest": ["forest", "biome", "mangrove", "tropical", "deciduous", "evergreen", "vegetation", "scrub", "savanna", "tundra", "grassland"],
        "National Parks & Wildlife": ["national park", "tiger reserve", "wildlife sanctuary", "biosphere reserve", "ramsar", "elephant reserve", "conservation", "species", "endangered"],
        "Physical Geography of India": ["himalaya", "western ghats", "eastern ghats", "aravalli", "vindhya", "satpura", "deccan", "peninsular", "coastal", "island", "andaman", "lakshadweep"],
        "Economic Geography": ["agriculture", "crop", "mineral", "coal", "iron ore", "petroleum", "port", "industry", "power plant", "irrigation", "fisheries"],
        "World Geography": ["continent", "ocean", "pacific", "atlantic", "arctic", "strait", "mountain", "volcano", "earthquake", "tectonic", "plate"],
        "Maps & Location": ["latitude", "longitude", "tropic", "equator", "border", "boundary", "state", "direction", "locate", "which state", "passes through"],
    }

    def auto_tag_upsc_topics(self, question_texts: List[str]) -> List[Dict[str, str]]:
        """
        Takes a list of question texts and returns a list of dicts with 'subject' and
        'geo_subtopic' (populated only when subject=Geography).

        Returns: [{"subject": "Geography", "geo_subtopic": "Rivers & Drainage"}, ...]
        """
        if not question_texts:
            return []

        formatted_questions = ""
        for i, q in enumerate(question_texts):
            formatted_questions += f"Q{i+1}: {q[:500]}\n---\n"

        prompt = f"""You are a UPSC subject expert. Categorize each question into one of:
- Polity
- History
- Geography
- Economy
- Science & Tech
- Environment
- Current Affairs
- Ethics

For any question tagged as 'Geography', also provide a sub-topic from this list:
- Geomorphology
- Climatology
- Rivers & Drainage
- Soils
- Natural Vegetation & Forest
- National Parks & Wildlife
- Physical Geography of India
- Economic Geography
- World Geography
- Maps & Location

QUESTIONS:
{formatted_questions}

Return JSON ONLY:
{{
    "results": [
        {{"subject": "SubjectName", "geo_subtopic": "SubtopicOrNull"}},
        ...
    ]
}}
Results list length MUST equal {len(question_texts)}. Use null for geo_subtopic when subject is not Geography.
"""

        try:
            response = self.generate_text(prompt, is_complex=False, temperature=0.1)
            import json
            clean = response.replace("```json", "").replace("```", "").strip()
            data = json.loads(clean)
            results = data.get("results", [])

            # Pad if AI returns fewer results than expected
            while len(results) < len(question_texts):
                results.append({"subject": "General", "geo_subtopic": None})

            return results[:len(question_texts)]
        except Exception as e:
            print(f"Auto-tagging error: {e}")
            return [{"subject": "General", "geo_subtopic": None}] * len(question_texts)

    def evaluate_cognitive_skill_gap(
        self,
        question_text: str,
        student_answer: str,
        subject: str,
        geo_subtopic: Optional[str] = None,
        user: Any = None,
    ) -> Dict[str, Any]:
        """
        Subject-aware Synapse cognitive gap evaluator.

        For Geography: assesses spatial reasoning, map logic, and process understanding.
        For Polity: assesses constitutional recall and legal reasoning.
        For others: applies a generic conceptual understanding rubric.

        Returns a structured gap report for the Synapse heatmap.
        """
        if subject == "Geography":
            domain_label = geo_subtopic or "Physical Geography"
            rubric = f"""You are an IAS Geography Coach specializing in {domain_label}.

Evaluate this student's answer on these Geography-specific cognitive dimensions:
1. Spatial Accuracy (Do they correctly situate features — regions, directions, relative positions?) [0-10]
2. Process Understanding (Do they explain WHY — monsoon mechanics, river formation, soil genesis?) [0-10]
3. Map Logic (Can they reason from map data — tributaries, drainage patterns, atlas cross-referencing?) [0-10]
4. Factual Precision (Correct names, correct states, correct classifications?) [0-10]
5. Current Relevance (Does the answer connect to recent events or UPSC PYQ context?) [0-10]

Return JSON ONLY:
{{
    "scores": {{"spatial_accuracy": 0, "process_understanding": 0, "map_logic": 0, "factual_precision": 0, "current_relevance": 0, "total": 0}},
    "gap_type": "knowledge_gap | logic_gap | mastered",
    "missing_concepts": ["concept1", "concept2"],
    "feedback": "Short, specific improvement tip (max 2 sentences).",
    "suggested_revision": "Which specific chapter/topic to revise."
}}"""
        elif subject == "Polity":
            rubric = """You are a constitutional law expert coaching for UPSC Polity.

Evaluate on these Polity-specific cognitive dimensions:
1. Constitutional Recall (Correct Article/Clause/Amendment numbers?) [0-10]
2. Conceptual Clarity (Fundamental Rights vs DPSP, Parliament vs Executive distinctions?) [0-10]
3. Case Law Awareness (Landmark Supreme Court judgments when relevant?) [0-10]
4. Analytical Depth (Can they go beyond rote memorization to apply logic?) [0-10]
5. Current Relevance (Recent constitutional amendments, electoral reforms?) [0-10]

Return JSON ONLY:
{{
    "scores": {{"constitutional_recall": 0, "conceptual_clarity": 0, "case_law_awareness": 0, "analytical_depth": 0, "current_relevance": 0, "total": 0}},
    "gap_type": "knowledge_gap | logic_gap | mastered",
    "missing_concepts": ["concept1", "concept2"],
    "feedback": "Short, specific improvement tip (max 2 sentences).",
    "suggested_revision": "Which specific chapter/topic to revise."
}}"""
        else:
            rubric = f"""You are a UPSC {subject} expert evaluator.

Evaluate on general cognitive dimensions:
1. Core Concept Accuracy [0-10]
2. Depth of Understanding [0-10]
3. Application of Knowledge [0-10]
4. Factual Precision [0-10]
5. Current Relevance [0-10]

Return JSON ONLY:
{{
    "scores": {{"concept_accuracy": 0, "depth": 0, "application": 0, "factual_precision": 0, "current_relevance": 0, "total": 0}},
    "gap_type": "knowledge_gap | logic_gap | mastered",
    "missing_concepts": ["concept1", "concept2"],
    "feedback": "Short feedback.",
    "suggested_revision": "Topic to revise."
}}"""

        full_prompt = f"""{rubric}

QUESTION: {question_text}

STUDENT ANSWER: {student_answer}
"""

        try:
            response = self.generate_text(full_prompt, user=user, is_complex=True, temperature=0.2)
            import json
            clean = response.replace("```json", "").replace("```", "").strip()
            result = json.loads(clean)
            result["subject"] = subject
            result["geo_subtopic"] = geo_subtopic
            return result
        except Exception as e:
            print(f"Cognitive gap evaluation error: {e}")
            return {
                "scores": {"total": 0},
                "gap_type": "knowledge_gap",
                "missing_concepts": [],
                "feedback": "Evaluation failed. Please retry.",
                "suggested_revision": subject,
                "subject": subject,
                "geo_subtopic": geo_subtopic,
            }

# Global instance
gemini_service = GeminiService()
