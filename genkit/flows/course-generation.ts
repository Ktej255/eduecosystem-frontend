/**
 * AI Course Generation Flows
 * Genkit flows for generating course outlines and lesson content
 */

import { generate } from '@genkit-ai/ai';
import { configureGenkit } from '@genkit-ai/core';
import { defineFlow, runFlow } from '@genkit-ai/flow';
import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import * as z from 'zod';

// Configure Genkit
configureGenkit({
    plugins: [googleAI()],
    logLevel: 'debug',
    enableTracingAndMetrics: true,
});

// Input schemas
const CourseOutlineInputSchema = z.object({
    topic: z.string().describe('Course topic or title'),
    targetAudience: z.string().optional().describe('Target audience (e.g., beginners, professionals)'),
    difficulty: z.string().optional().describe('Difficulty level: beginner, intermediate, or advanced'),
    objectives: z.string().optional().describe('Learning objectives'),
    moduleCount: z.number().optional().default(4).describe('Number of modules to generate'),
});

const LessonContentInputSchema = z.object({
    lessonTitle: z.string().describe('Title of the lesson'),
    moduleTitle: z.string().describe('Title of the parent module'),
    courseContext: z.string().optional().describe('Brief context about the course'),
    lessonType: z.string().optional().default('text').describe('Type: text, video, quiz, assignment'),
    duration: z.number().optional().default(15).describe('Target duration in minutes'),
});

// Output schemas
const ModuleSchema = z.object({
    title: z.string(),
    description: z.string(),
    lessons: z.array(z.object({
        title: z.string(),
        description: z.string(),
        type: z.enum(['video', 'text', 'quiz', 'assignment']),
        duration_minutes: z.number(),
    })),
});

const CourseOutlineOutputSchema = z.object({
    courseTitle: z.string(),
    courseDescription: z.string(),
    modules: z.array(ModuleSchema),
});

// ============================================================================
// FLOW 1: Generate Course Outline
// ============================================================================

export const generateCourseOutlineFlow = defineFlow(
    {
        name: 'generateCourseOutline',
        inputSchema: CourseOutlineInputSchema,
        outputSchema: CourseOutlineOutputSchema,
    },
    async (input) => {
        const { topic, targetAudience, difficulty, objectives, moduleCount } = input;

        const prompt = `You are an expert course designer. Create a comprehensive course outline for a course on "${topic}".

Target Audience: ${targetAudience || 'General learners'}
Difficulty Level: ${difficulty || 'Beginner'}
Learning Objectives: ${objectives || 'To provide comprehensive understanding of the topic'}
Number of Modules: ${moduleCount}

Generate a structured course outline with:
1. A clear, engaging course title
2. A compelling course description (2-3 sentences)
3. ${moduleCount} modules, each containing:
   - Module title
   - Module description
   - 3-5 lessons per module with:
     * Lesson title
     * Brief lesson description
     * Lesson type (video, text, quiz, or assignment)
     * Duration in minutes (realistic for the content type)

Make the course practical and engaging. Include a mix of lesson types:
- Video lessons for demonstrations and explanations
- Text lessons for detailed concepts
- Quizzes for knowledge checks
- Assignments for hands-on practice

Return ONLY valid JSON matching this structure:
{
  "courseTitle": "string",
  "courseDescription": "string",
  "modules": [
    {
      "title": "string",
      "description": "string",
      "lessons": [
        {
          "title": "string",
          "description": "string",
          "type": "video" | "text" | "quiz" | "assignment",
          "duration_minutes": number
        }
      ]
    }
  ]
}`;

        const result = await generate({
            model: gemini15Flash,
            prompt,
            output: {
                schema: CourseOutlineOutputSchema,
            },
        });

        return result.output!;
    }
);

// ============================================================================
// FLOW 2: Generate Lesson Content
// ============================================================================

export const generateLessonContentFlow = defineFlow(
    {
        name: 'generateLessonContent',
        inputSchema: LessonContentInputSchema,
        outputSchema: z.object({
            content: z.string().describe('Markdown formatted lesson content'),
        }),
    },
    async (input) => {
        const { lessonTitle, moduleTitle, courseContext, lessonType, duration } = input;

        let prompt = '';

        if (lessonType === 'text') {
            prompt = `You are an expert educator. Create comprehensive lesson content for a text-based lesson.

Lesson Title: "${lessonTitle}"
Module: "${moduleTitle}"
Course Context: ${courseContext || 'General educational course'}
Target Duration: ${duration} minutes

Create detailed, well-structured lesson content in Markdown format with:
1. Clear introduction explaining what will be learned
2. Main content broken into logical sections with headings
3. Code examples (if applicable) in code blocks
4. Key concepts highlighted
5. Practical examples and use cases
6. Summary of key takeaways

Use markdown formatting:
- # for main headings
- ## for subheadings
- \`code\` for inline code
- \`\`\`language for code blocks
- **bold** for emphasis
- Lists for better readability

Make it engaging and educational. Aim for ${duration} minutes of reading time.`;
        } else if (lessonType === 'video') {
            prompt = `Create a video script/transcript for a lesson on "${lessonTitle}" in the "${moduleTitle}" module.

Course Context: ${courseContext || 'General educational course'}
Duration: ${duration} minutes

Format as markdown with:
- Introduction (hook the viewer)
- Main content sections
- Visual descriptions [e.g., "Show code example on screen"]
- Conclusion with next steps

Make it conversational and engaging for video format.`;
        } else if (lessonType === 'quiz') {
            prompt = `Create quiz questions for a lesson on "${lessonTitle}".

Module: "${moduleTitle}"
Context: ${courseContext || 'General educational course'}

Generate 5-10 multiple choice questions in markdown format:
1. Question text
2. 4 answer options (A, B, C, D)
3. Correct answer indicated
4. Brief explanation

Format each question clearly in markdown.`;
        } else if (lessonType === 'assignment') {
            prompt = `Create an assignment prompt for "${lessonTitle}" in the "${moduleTitle}" module.

Context: ${courseContext || 'General educational course'}
Estimated Time: ${duration} minutes

Include in markdown:
1. Assignment objective
2. Detailed instructions
3. Requirements/criteria
4. Deliverables
5. Optional bonus challenges

Make it practical and achievable.`;
        }

        const result = await generate({
            model: gemini15Flash,
            prompt,
            config: {
                temperature: 0.7,
            },
        });

        return {
            content: result.text,
        };
    }
);

// ============================================================================
// FLOW 3: Generate Quiz Questions for Module
// ============================================================================

export const generateModuleQuizFlow = defineFlow(
    {
        name: 'generateModuleQuiz',
        inputSchema: z.object({
            moduleTitle: z.string(),
            lessonTitles: z.array(z.string()),
            courseContext: z.string().optional(),
        }),
        outputSchema: z.object({
            questions: z.array(z.object({
                text: z.string(),
                options: z.array(z.string()),
                correctAnswer: z.string(),
                explanation: z.string().optional(),
            })),
        }),
    },
    async (input) => {
        const { moduleTitle, lessonTitles, courseContext } = input;

        const prompt = `Create a comprehensive quiz for the module "${moduleTitle}".

Course Context: ${courseContext || 'General educational course'}
Lessons covered: ${lessonTitles.join(', ')}

Generate 8-12 multiple choice questions that:
1. Cover all lessons in the module
2. Test understanding, not just memorization
3. Include scenario-based questions
4. Progress from easier to harder

For each question, provide:
- Clear question text
- 4 plausible answer options
- The correct answer
- A brief explanation of why it's correct

Return as JSON array of questions.`;

        const result = await generate({
            model: gemini15Flash,
            prompt,
            output: {
                schema: z.object({
                    questions: z.array(z.object({
                        text: z.string(),
                        options: z.array(z.string()),
                        correctAnswer: z.string(),
                        explanation: z.string().optional(),
                    })),
                }),
            },
        });

        return result.output!;
    }
);

// Export for API usage
export { runFlow };
