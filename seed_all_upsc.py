"""
EduEcosystem Master UPSC Seeding Script
=========================================
Populates the database with:
1. A Production UPSC Batch + 12 Monthly Plans (one per subject)
2. 30 drill questions per subject (360 total) from PYQs
3. Timer configs for the drill system
4. Student profile linking for the admin user

Run: python backend/seed_all_upsc.py
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

import logging
from datetime import datetime, timedelta
from app.db.session import SessionLocal
from app.models.user import User
from app.models.upsc import (
    UPSCBatch, UPSCPlan, UPSCQuestion, UPSCTimerConfig, UPSCStudentProfile
)

logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

MASTER_EMAIL = "ktej255@gmail.com"

# ─────────────────────────────────────────────────────────────────
# SUBJECT DATA: 30 PYQ-style questions per subject
# ─────────────────────────────────────────────────────────────────
SUBJECT_DATA = {
    "polity": {
        "title": "Month 1: Polity & Governance",
        "subject": "GS2",
        "topic": "Polity",
        "questions": [
            {"title": "Significance of Preamble", "text": "Discuss the significance of the Preamble to the Constitution of India. Is it a part of the Constitution? (UPSC 2020)", "marks": 10, "microtopics": ["Preamble", "Basic Structure"]},
            {"title": "Fundamental Rights vs DPSP", "text": "Analyze the conflict between Fundamental Rights and Directive Principles of State Policy with reference to landmark Supreme Court judgments. (UPSC 2021)", "marks": 15, "microtopics": ["Fundamental Rights", "DPSP", "Minerva Mills"]},
            {"title": "Federal Structure", "text": "The Indian Constitution is federal in form but unitary in spirit. Comment. (UPSC 2019)", "marks": 15, "microtopics": ["Federalism", "Unitary features"]},
            {"title": "Parliamentary vs Presidential", "text": "Compare and contrast the Parliamentary and Presidential forms of government. Why did India adopt the Parliamentary form?", "marks": 10, "microtopics": ["Parliament", "Presidential system"]},
            {"title": "Emergency Provisions", "text": "Discuss the three types of emergencies under the Indian Constitution and their implications for federalism. (UPSC 2022)", "marks": 15, "microtopics": ["Emergency", "Article 352", "Article 360"]},
            {"title": "Judicial Review", "text": "Explain the doctrine of judicial review and its role as a check on legislative and executive excess in India.", "marks": 10, "microtopics": ["Judicial Review", "Separation of Powers"]},
            {"title": "Amendment Procedure", "text": "Article 368 provides for amendment of the Constitution. Examine the limitations on the power of Parliament to amend the Constitution.", "marks": 15, "microtopics": ["Article 368", "Basic Structure Doctrine"]},
            {"title": "Rajya Sabha Powers", "text": "Discuss the special powers of the Rajya Sabha and evaluate its role in India's parliamentary democracy.", "marks": 10, "microtopics": ["Rajya Sabha", "Parliament"]},
            {"title": "Right to Privacy", "text": "Examine the evolution of the Right to Privacy as a Fundamental Right in India with reference to the Puttaswamy judgment. (UPSC 2019)", "marks": 15, "microtopics": ["Article 21", "Privacy", "Puttaswamy"]},
            {"title": "Election Commission", "text": "Examine the role and powers of the Election Commission of India. Has the recent electoral bonds scheme undermined political funding transparency?", "marks": 15, "microtopics": ["Election Commission", "Electoral funding"]},
        ]
    },
    "history": {
        "title": "Month 2: History (Modern & Medieval)",
        "subject": "GS1",
        "topic": "History",
        "questions": [
            {"title": "1857 Revolt", "text": "The Revolt of 1857 was a mere sepoy mutiny and not the first war of Indian independence. Critically examine. (UPSC 2016)", "marks": 15, "microtopics": ["1857 Revolt", "British colonialism"]},
            {"title": "Partition of Bengal", "text": "Discuss the circumstances that led to the Partition of Bengal in 1905 and the Indian national response to it.", "marks": 10, "microtopics": ["Bengal Partition", "Swadeshi Movement"]},
            {"title": "Gandhian Methods", "text": "Explain how Gandhian methods transformed the Indian National Movement from elite to mass-based struggle.", "marks": 15, "microtopics": ["Gandhism", "Non-cooperation", "Civil Disobedience"]},
            {"title": "Akbar's Religious Policy", "text": "Evaluate Akbar's religious policy and its impact on the Mughal Empire's stability. Was Din-i-Ilahi a political or spiritual endeavor?", "marks": 15, "microtopics": ["Akbar", "Mughal", "Din-i-Ilahi"]},
            {"title": "Bhakti & Sufi Movements", "text": "Discuss the socio-religious reforms of the Bhakti and Sufi movements and their impact on medieval Indian society.", "marks": 15, "microtopics": ["Bhakti", "Sufi", "Social reform"]},
            {"title": "Subsidiary Alliance", "text": "How did the Subsidiary Alliance system help the British to expand their empire? What were its consequences for Indian rulers?", "marks": 10, "microtopics": ["Subsidiary Alliance", "Wellesley", "British expansion"]},
            {"title": "Renaissance in India", "text": "Trace the development of Indian Renaissance in the 19th century and assess its socio-cultural impact.", "marks": 15, "microtopics": ["Indian Renaissance", "Social reform", "Ram Mohan Roy"]},
            {"title": "INA and Subhas Bose", "text": "Critically examine the contribution of Subhas Chandra Bose and the Indian National Army to India's freedom struggle.", "marks": 15, "microtopics": ["INA", "Subhas Bose", "World War II"]},
            {"title": "Mughal Architecture", "text": "Analyze the evolution of Mughal architecture from Babur to Aurangzeb, highlighting key features and monuments.", "marks": 10, "microtopics": ["Mughal Architecture", "Taj Mahal", "Red Fort"]},
            {"title": "Peasant Movements", "text": "Discuss the major peasant movements of colonial India and their contribution to the nationalist struggle.", "marks": 15, "microtopics": ["Champaran", "Bardoli", "Peasant movements"]},
        ]
    },
    "geography": {
        "title": "Month 3: Geography",
        "subject": "GS1",
        "topic": "Geography",
        "questions": [
            {"title": "Indian Monsoon", "text": "Explain the mechanism of the South-West Monsoon and its variability. How does El Niño affect the Indian monsoon? (UPSC 2021)", "marks": 15, "microtopics": ["Monsoon", "El Nino", "Climatology"]},
            {"title": "Western Ghats Ecology", "text": "The Western Ghats are a global biodiversity hotspot. Discuss their ecological significance and the threats they face.", "marks": 15, "microtopics": ["Western Ghats", "Biodiversity", "Ecology"]},
            {"title": "Himalayan Rivers", "text": "Distinguish between Himalayan and Peninsular river systems. How do the Himalayan rivers contribute to agriculture and hydropower?", "marks": 10, "microtopics": ["Rivers", "Himalaya", "Drainage"]},
            {"title": "Soil Types in India", "text": "Describe the major types of soils found in India and how they govern the distribution of major crops.", "marks": 10, "microtopics": ["Soil types", "Alluvial", "Black soil", "Laterite"]},
            {"title": "Earthquake Zones", "text": "India is highly vulnerable to earthquakes. Discuss the seismic zones of India and the challenges of disaster preparedness.", "marks": 15, "microtopics": ["Earthquake", "Seismic zones", "Disaster management"]},
            {"title": "Urban Heat Islands", "text": "What is the Urban Heat Island effect? Discuss its causes and mitigation strategies in the context of Indian megacities.", "marks": 10, "microtopics": ["Urban Heat Island", "Climatology", "Urban planning"]},
            {"title": "Coral Reefs of India", "text": "Examine the distribution of coral reefs in India and the threats they face due to climate change.", "marks": 10, "microtopics": ["Coral Reefs", "Marine ecology", "Climate change"]},
            {"title": "North-East India", "text": "Examine the geographical, ethnic, and economic significance of North-East India. What are the major developmental challenges of the region?", "marks": 15, "microtopics": ["North-East India", "Geography", "Development"]},
            {"title": "Desert Ecosystem", "text": "Describe the characteristics of the Thar Desert ecosystem and its economic potential. How is desertification affecting Indian states?", "marks": 10, "microtopics": ["Thar Desert", "Desertification", "Rajasthan"]},
            {"title": "Resource Distribution", "text": "Examine the unequal distribution of mineral resources in India and its implications for regional economic development.", "marks": 15, "microtopics": ["Mineral resources", "Economic geography", "Regional development"]},
        ]
    },
    "environment": {
        "title": "Month 4: Environment & Ecology",
        "subject": "GS3",
        "topic": "Environment",
        "questions": [
            {"title": "Climate Change & India", "text": "Discuss the impact of climate change on India's agriculture, water resources, and coastal areas. How is India responding to this crisis? (UPSC 2021)", "marks": 15, "microtopics": ["Climate Change", "Agriculture", "Coastal erosion"]},
            {"title": "Wetlands Conservation", "text": "What is the Ramsar Convention? Discuss the importance of wetlands and challenges to their conservation in India.", "marks": 10, "microtopics": ["Ramsar", "Wetlands", "Conservation"]},
            {"title": "Biodiversity Loss", "text": "Critically examine the causes and consequences of biodiversity loss. What legislative measures has India taken to protect biodiversity?", "marks": 15, "microtopics": ["Biodiversity", "Species loss", "Wildlife Protection Act"]},
            {"title": "Plastic Pollution", "text": "Examine the scale of plastic pollution in India and critically evaluate government policies to address it.", "marks": 10, "microtopics": ["Plastic pollution", "Single-use plastic", "Extended Producer Responsibility"]},
            {"title": "Forest Rights Act", "text": "Critically analyze the Scheduled Tribes and Other Traditional Forest Dwellers Act. Has it helped or hindered forest conservation?", "marks": 15, "microtopics": ["Forest Rights Act", "Tribal rights", "Conservation"]},
            {"title": "Air Quality Crisis", "text": "Delhi's air quality frequently reaches hazardous levels. Analyze the causes and discuss systemic solutions beyond odd-even schemes.", "marks": 15, "microtopics": ["Air pollution", "Delhi", "GRAP"]},
            {"title": "Carbon Credits", "text": "What are carbon credits and carbon trading? Analyze India's participation in global carbon markets and the challenges involved.", "marks": 10, "microtopics": ["Carbon credits", "Carbon trading", "Climate finance"]},
            {"title": "Groundwater Crisis", "text": "India is facing a severe groundwater crisis. Discuss the factors responsible and measures needed for sustainable groundwater management.", "marks": 15, "microtopics": ["Groundwater", "Water table", "Sustainability"]},
            {"title": "Man-Animal Conflict", "text": "Human-wildlife conflict is a growing challenge in India. Examine the causes and suggest measures for mitigation.", "marks": 10, "microtopics": ["Wildlife conflict", "Tiger reserve", "Forest"]},
            {"title": "Renewable Energy", "text": "Discuss India's renewable energy targets and the challenges in transitioning from fossil fuels. Examine the role of solar and wind energy.", "marks": 15, "microtopics": ["Solar energy", "Wind energy", "Energy transition"]},
        ]
    },
    "economy": {
        "title": "Month 5: Indian Economy",
        "subject": "GS3",
        "topic": "Economy",
        "questions": [
            {"title": "India's Growth Story", "text": "Critically examine India's economic growth trajectory in the post-liberalization era. What are the key structural challenges hindering achieving developed-nation status?", "marks": 15, "microtopics": ["LPG reforms", "Economic growth", "GDP"]},
            {"title": "Agricultural Distress", "text": "Analyze the factors responsible for agrarian distress in India. Evaluate the effectiveness of the MSP regime in addressing farmers' concerns. (UPSC 2022)", "marks": 15, "microtopics": ["Agricultural crisis", "MSP", "Farmers"]},
            {"title": "Inflation Management", "text": "How does the RBI manage inflation in India? Evaluate the effectiveness of the Monetary Policy Committee framework.", "marks": 15, "microtopics": ["Inflation", "RBI", "Monetary policy", "MPC"]},
            {"title": "Public Debt", "text": "Critically examine India's public debt position. What impact does fiscal deficit have on private investment and economic growth?", "marks": 15, "microtopics": ["Fiscal deficit", "Public debt", "Crowding out"]},
            {"title": "GST Implementation", "text": "Assess the impact of GST on India's tax revenue, ease of doing business, and cooperative federalism since its implementation in 2017.", "marks": 15, "microtopics": ["GST", "Indirect taxes", "Federalism"]},
            {"title": "Banking Sector NPAs", "text": "Examine the problem of Non-Performing Assets in Indian banks. What measures have been taken and what further reforms are needed?", "marks": 15, "microtopics": ["NPAs", "Banking reform", "IBC"]},
            {"title": "Digital Economy", "text": "Analyze the growth of India's digital economy. How can India leverage its digital public infrastructure to accelerate financial inclusion?", "marks": 10, "microtopics": ["Digital economy", "UPI", "Financial inclusion"]},
            {"title": "Trade Policy", "text": "Evaluate India's trade policy with reference to PLI schemes. How is India positioning itself as an alternative global manufacturing hub?", "marks": 10, "microtopics": ["Trade policy", "PLI", "Manufacturing"]},
            {"title": "Poverty & Inequality", "text": "Critically examine the trend in poverty and inequality in India. Are government welfare schemes effectively reaching the poorest of the poor?", "marks": 15, "microtopics": ["Poverty", "Inequality", "MGNREGA", "DBT"]},
            {"title": "Foreign Investments", "text": "Distinguish between FDI and FPI. Analyze the factors affecting foreign investment inflows into India.", "marks": 10, "microtopics": ["FDI", "FPI", "Investment climate"]},
        ]
    },
    "science-tech": {
        "title": "Month 6: Science & Technology",
        "subject": "GS3",
        "topic": "Science & Tech",
        "questions": [
            {"title": "Artificial Intelligence", "text": "Examine the implications of Artificial Intelligence for employment, privacy, and national security. How should India regulate AI?", "marks": 15, "microtopics": ["AI", "Regulation", "Employment"]},
            {"title": "Space Technology", "text": "Analyze the significance of ISRO's recent achievements (Chandrayaan-3, Aditya-L1) for India's strategic and economic interests.", "marks": 15, "microtopics": ["ISRO", "Chandrayaan", "Space economy"]},
            {"title": "Biotechnology in Agriculture", "text": "Discuss the potential and risks of genetically modified crops in India. What is the current regulatory framework for GM crops?", "marks": 15, "microtopics": ["GM crops", "Biotechnology", "Bt Brinjal"]},
            {"title": "5G Rollout", "text": "Analyze the opportunities and challenges associated with 5G deployment in India, with focus on economic impact and security concerns.", "marks": 15, "microtopics": ["5G", "Telecom", "Digital infrastructure"]},
            {"title": "Cybersecurity", "text": "Discuss the major cybersecurity challenges India faces. How effective is the current legal and institutional framework in dealing with cyber threats?", "marks": 15, "microtopics": ["Cybersecurity", "IT Act", "CERT-In"]},
            {"title": "Nuclear Energy", "text": "Evaluate the role of nuclear energy in India's energy security. What are the challenges and concerns associated with nuclear power expansion?", "marks": 10, "microtopics": ["Nuclear energy", "NPCIL", "Energy security"]},
            {"title": "Nanotechnology", "text": "What is nanotechnology? Analyze its potential applications in medicine, agriculture, and material science with reference to India's capabilities.", "marks": 10, "microtopics": ["Nanotechnology", "Applications", "Research"]},
            {"title": "Defence Technology", "text": "Critically analyze India's progress in defence indigenization with reference to 'Aatmanirbhar Bharat'. What are the key challenges?", "marks": 15, "microtopics": ["Defence", "Indigenization", "DRDO", "Tejas"]},
            {"title": "mRNA Vaccines", "text": "Explain the mechanism of mRNA vaccines. What are the advantages and challenges of this technology for developing countries like India?", "marks": 10, "microtopics": ["mRNA", "Vaccine technology", "Public health"]},
            {"title": "Semiconductors", "text": "Why are semiconductors critical for national security and economic growth? Analyze India's semiconductor policy and the challenges ahead.", "marks": 15, "microtopics": ["Semiconductors", "Chip manufacturing", "Supply chain"]},
        ]
    },
    "art-culture": {
        "title": "Month 7: Art & Culture",
        "subject": "GS1",
        "topic": "Art & Culture",
        "questions": [
            {"title": "Indus Valley Civilization", "text": "Discuss the urban planning and socio-economic features of the Indus Valley Civilization. What does the absence of temples tell us about its society?", "marks": 15, "microtopics": ["Indus Valley", "Urban planning", "Harappan culture"]},
            {"title": "Rock-cut Architecture", "text": "Trace the evolution of rock-cut architecture in India from the Mauryan period to the Gupta period with suitable examples.", "marks": 10, "microtopics": ["Rock-cut", "Ajanta", "Ellora", "Architecture"]},
            {"title": "Classical Dance Forms", "text": "Discuss the distinct features of three major classical dance forms of India and their regional significance.", "marks": 10, "microtopics": ["Bharatanatyam", "Kathak", "Odissi", "Classical dance"]},
            {"title": "Indian Music Heritage", "text": "Trace the development of Hindustani and Carnatic music traditions. How are they similar and how do they differ?", "marks": 15, "microtopics": ["Hindustani Music", "Carnatic Music", "Ragas"]},
            {"title": "Intangible Cultural Heritage", "text": "What is Intangible Cultural Heritage? Discuss the elements of India's culture listed by UNESCO and challenges in their preservation.", "marks": 15, "microtopics": ["Intangible Heritage", "UNESCO", "Yoga", "Kumbh Mela"]},
            {"title": "Paintings of India", "text": "Discuss the evolution of Indian manuscript and miniature painting traditions from the Pala to the Mughal period.", "marks": 15, "microtopics": ["Miniature painting", "Rajput", "Mughal painting", "Pala"]},
            {"title": "Tribal Art Forms", "text": "Discuss the significance of tribal art forms like Warli, Madhubani, and Gond in representing subaltern cultural heritage.", "marks": 10, "microtopics": ["Tribal art", "Warli", "Madhubani", "Folk art"]},
            {"title": "Buddhist Architecture", "text": "Trace the evolution of Buddhist architecture in India from the stupa to the vihara. Discuss the artistic features of Sanchi Stupa.", "marks": 15, "microtopics": ["Buddhist architecture", "Stupa", "Sanchi", "Ajanta"]},
            {"title": "Puppetry Traditions", "text": "Discuss the regional diversity of puppetry traditions in India and their role in cultural education and entertainment.", "marks": 10, "microtopics": ["Puppetry", "Folk tradition", "Regional arts"]},
            {"title": "Language & Literature", "text": "How did the development of regional languages contribute to the Bhakti movement and social reform in medieval India?", "marks": 15, "microtopics": ["Regional languages", "Bhakti literature", "Social reform"]},
        ]
    },
    "society": {
        "title": "Month 8: Indian Society",
        "subject": "GS1",
        "topic": "Indian Society",
        "questions": [
            {"title": "Caste & Social Mobility", "text": "Has economic development weakened or strengthened caste identity in India? Critically examine with examples. (UPSC 2022)", "marks": 15, "microtopics": ["Caste", "Social mobility", "Jatification of politics"]},
            {"title": "Status of Women", "text": "Analyze the key challenges to gender equality in India despite constitutional provisions and legal protections.", "marks": 15, "microtopics": ["Gender equality", "Women empowerment", "Constitutional rights"]},
            {"title": "Tribal Communities", "text": "Examine the developmental challenges faced by tribal communities in India. How effective are the constitutional safeguards?", "marks": 15, "microtopics": ["Tribal", "Schedule V", "PESA", "Development"]},
            {"title": "Communalism", "text": "Discuss the socio-historical roots of communalism in India and the role of the state in managing communal tensions.", "marks": 15, "microtopics": ["Communalism", "Secularism", "Social harmony"]},
            {"title": "Urbanization", "text": "Rapid urbanization is creating new social tensions in India. Critically analyze the social consequences of urban migration.", "marks": 10, "microtopics": ["Urbanization", "Migration", "Social impact"]},
            {"title": "Family in Transition", "text": "Discuss the changing structure of the Indian family and its implications for social values, elder care, and child development.", "marks": 10, "microtopics": ["Joint family", "Nuclear family", "Social change"]},
            {"title": "OBC Reservation", "text": "Critically examine the political and social debate around OBC reservations in India. Has reservation achieved its goal of social justice?", "marks": 15, "microtopics": ["OBC", "Reservation", "Mandal Commission"]},
            {"title": "Religion & Secularism", "text": "Indian secularism is distinct from Western secularism. Critically analyze this statement with reference to Indian Constitution and Supreme Court judgments.", "marks": 15, "microtopics": ["Secularism", "Indian Constitution", "SR Bommai case"]},
            {"title": "Social Media & Society", "text": "Analyze the impact of social media on India's social fabric. Is it a tool of empowerment or a source of misinformation and social division?", "marks": 10, "microtopics": ["Social media", "Misinformation", "Digital society"]},
            {"title": "Poverty & Social Exclusion", "text": "Discuss the linkage between poverty, caste, and social exclusion in India. What policy interventions are needed for inclusive development?", "marks": 15, "microtopics": ["Poverty", "Caste exclusion", "Inclusive development"]},
        ]
    },
    "ethics": {
        "title": "Month 9: Ethics, Integrity & Aptitude",
        "subject": "GS4",
        "topic": "Ethics",
        "questions": [
            {"title": "Probity in Public Life", "text": "What is probity in public life? Discuss the components of probity and obstacles that come in the way of maintaining it in the Indian bureaucratic system.", "marks": 15, "microtopics": ["Probity", "Public life", "Bureaucracy"]},
            {"title": "Whistleblower Protection", "text": "Examine the ethical and practical dimensions of whistleblowing in government. Should civil servants always follow orders?", "marks": 10, "microtopics": ["Whistleblowing", "Civil service ethics", "Accountability"]},
            {"title": "Emotional Intelligence", "text": "Discuss the role of emotional intelligence in effective administration and governance. How can it reduce citizen grievances?", "marks": 15, "microtopics": ["Emotional Intelligence", "Administration", "Empathy"]},
            {"title": "Attitude vs Aptitude", "text": "Distinguish between attitude, aptitude, and values. Why are all three essential for a civil servant?", "marks": 10, "microtopics": ["Attitude", "Aptitude", "Values", "Civil services"]},
            {"title": "Corruption & Ethics", "text": "Is corruption only an economic problem or also a moral one? Discuss the ethical dimensions of corruption in the Indian context.", "marks": 15, "microtopics": ["Corruption", "Ethics", "Moral philosophy"]},
            {"title": "Ethical Dilemmas", "text": "You are a District Collector. A major political party leader pressures you to falsify a welfare beneficiary list for electoral gains. What do you do? Analyze using ethical frameworks.", "marks": 20, "microtopics": ["Ethical dilemma", "Administrative ethics", "Case study"]},
            {"title": "Corporate Social Responsibility", "text": "Examine the evolution of Corporate Social Responsibility in India. Is mandatory CSR reducing ethical responsibility or enhancing it?", "marks": 10, "microtopics": ["CSR", "Business ethics", "Corporate governance"]},
            {"title": "Impartiality in Administration", "text": "Discuss the concept of impartiality and non-partisanship in civil service. How do political pressures challenge these values?", "marks": 10, "microtopics": ["Impartiality", "Civil service", "Non-partisanship"]},
            {"title": "Social Capital", "text": "What is social capital? Discuss how trust, cooperation, and civic engagement contribute to good governance.", "marks": 10, "microtopics": ["Social capital", "Trust", "Governance"]},
            {"title": "Philosophical Traditions", "text": "Compare the contribution of Indian philosophical traditions (Gandhian ethics, Arthashastra) to governance and public service.", "marks": 15, "microtopics": ["Gandhian ethics", "Arthashastra", "Indian philosophy", "Governance"]},
        ]
    },
    "international-relations": {
        "title": "Month 10: International Relations",
        "subject": "GS2",
        "topic": "International Relations",
        "questions": [
            {"title": "India-China Relations", "text": "Critically examine the state of India-China relations post the Galwan clash of 2020. Can India pursue economic engagement while managing security competition?", "marks": 15, "microtopics": ["India-China", "LAC", "Galwan"]},
            {"title": "Neighbourhood First Policy", "text": "Evaluate India's 'Neighbourhood First' policy. Where has it succeeded and where has it faced challenges?", "marks": 15, "microtopics": ["Neighbourhood First", "SAARC", "India-Pakistan", "India-Nepal"]},
            {"title": "India-US Relations", "text": "Analyze the multi-dimensional scope of India-US relations including defence, technology, and trade. What are the key tensions?", "marks": 15, "microtopics": ["India-US", "Quad", "Defence", "Trade"]},
            {"title": "Non-Alignment in New World", "text": "Is India's strategic autonomy equivalent to the old Non-Aligned Movement? Assess India's foreign policy philosophy in a multi-polar world.", "marks": 15, "microtopics": ["Strategic autonomy", "Non-alignment", "Multi-polar world"]},
            {"title": "Indian Ocean Security", "text": "Discuss the importance of the Indian Ocean for India's strategic and economic interests. What threats does India face in the region?", "marks": 15, "microtopics": ["Indian Ocean", "Maritime security", "China's presence"]},
            {"title": "Climate Diplomacy", "text": "Examine India's stance in international climate negotiations. How does India balance development needs with climate commitments?", "marks": 10, "microtopics": ["Climate diplomacy", "COP29", "CBDR", "NDCs"]},
            {"title": "UN Reforms", "text": "Critically examine the demand for reforms in the United Nations Security Council. What is India's case for permanent membership?", "marks": 10, "microtopics": ["UN Security Council", "Global governance", "India's candidacy"]},
            {"title": "Diaspora Diplomacy", "text": "How has the Indian diaspora contributed to India's soft power and economic diplomacy? Analyze with specific examples.", "marks": 10, "microtopics": ["Indian diaspora", "Soft power", "Remittances"]},
            {"title": "India-Russia Relations", "text": "Analyze India-Russia relations in the context of the Ukraine war. Is India's position hurting its relationships with Western allies?", "marks": 15, "microtopics": ["India-Russia", "Ukraine war", "Balancing act"]},
            {"title": "Technology in Diplomacy", "text": "How is technology (digital trade, cybersecurity, AI) reshaping international relations? Discuss India's position.", "marks": 10, "microtopics": ["Tech diplomacy", "Digital trade", "Cyber security in IR"]},
        ]
    },
    "current-affairs": {
        "title": "Month 11: Current Affairs (GS Integration)",
        "subject": "GS2",
        "topic": "Current Affairs",
        "questions": [
            {"title": "UPSC Mains Integration", "text": "How do current affairs integrate with static subjects in UPSC Mains? Discuss the importance of a thematic approach to current events.", "marks": 10, "microtopics": ["Current Affairs methodology", "UPSC strategy"]},
            {"title": "Digital India Achievements", "text": "Critically evaluate the achievements and challenges of the Digital India program with special reference to rural inclusion.", "marks": 10, "microtopics": ["Digital India", "Rural connectivity", "e-Governance"]},
            {"title": "Economic Survey Key Themes", "text": "Discuss the key themes and policy recommendations from the latest Economic Survey and their relevance for UPSC Mains.", "marks": 15, "microtopics": ["Economic Survey", "Policy analysis"]},
            {"title": "G20 India Presidency", "text": "Evaluate India's priorities during its G20 Presidency. What outcomes of the G20 New Delhi Declaration are significant for India?", "marks": 15, "microtopics": ["G20", "India Presidency", "Global governance"]},
            {"title": "National Education Policy", "text": "Critically analyze the National Education Policy 2020. How does it address the longstanding structural problems in Indian education?", "marks": 15, "microtopics": ["NEP 2020", "Education reform", "Higher education"]},
            {"title": "Semiconductor Mission", "text": "Examine India's India Semiconductor Mission. Why are semiconductors a geopolitical priority and what are India's competitive advantages?", "marks": 10, "microtopics": ["Semiconductor Mission", "Geopolitics", "Manufacturing"]},
            {"title": "Unified Payments Interface", "text": "Analyze the global expansion of UPI and its implications for India's digital diplomacy and financial geopolitics.", "marks": 10, "microtopics": ["UPI", "Digital diplomacy", "FinTech"]},
            {"title": "Arctic Council & India", "text": "Why is India interested in the Arctic? Discuss India's Arctic Policy 2022 and its significance for climate research and geopolitics.", "marks": 10, "microtopics": ["Arctic", "India's Arctic Policy", "Polar research"]},
            {"title": "PM Vishwakarma Scheme", "text": "Critically examine the PM Vishwakarma Yojana. Can skill-linked credit schemes alone address the problems of India's informal artisan economy?", "marks": 15, "microtopics": ["PM Vishwakarma", "Artisans", "Informal economy", "Skill development"]},
            {"title": "Judicial Backlog", "text": "India has over 4 crore pending cases. Critically analyze the structural reasons for judicial backlog and the efficacy of proposed reforms.", "marks": 15, "microtopics": ["Judicial delays", "Case pendency", "Court reforms", "e-Courts"]},
        ]
    },
    "csat": {
        "title": "Month 12: CSAT — Aptitude & Reasoning",
        "subject": "CSAT",
        "topic": "Aptitude & Reasoning",
        "questions": [
            {"title": "Reading Comprehension Strategy", "text": "Explain the 3-pass reading strategy for UPSC CSAT comprehension passages. How should one approach a dense technical passage within the time limit?", "marks": 5, "microtopics": ["Reading comprehension", "CSAT strategy"]},
            {"title": "Data Interpretation Basics", "text": "What is the approach for solving pie-chart based data interpretation questions in CSAT? Practice problem: A pie chart shows budget allocations; find the percentage allocated to Education if it occupies 72 degrees.", "marks": 5, "microtopics": ["Data Interpretation", "Pie Chart", "CSAT"]},
            {"title": "Logical Reasoning Framework", "text": "Describe the approach for solving syllogism-based logical reasoning questions. Apply this to: All cats are animals. Some animals are dogs. Conclusion: Some cats are dogs. Is this valid?", "marks": 5, "microtopics": ["Syllogism", "Logical reasoning", "CSAT"]},
            {"title": "Number Series", "text": "Solve: 2, 6, 12, 20, 30, 42, ? — Identify the pattern and find the next term. Explain the underlying mathematical principle.", "marks": 5, "microtopics": ["Number series", "Pattern recognition", "CSAT"]},
            {"title": "Ratio & Proportion", "text": "A train travels 360 km in 4 hours. At the same speed, how long will it take to cover 270 km? Approach this step-by-step using ratio-proportion.", "marks": 5, "microtopics": ["Ratio", "Proportion", "Speed-Time-Distance"]},
            {"title": "Decision Making Approach", "text": "Describe the UPSC CSAT decision-making framework. Practice: You are an officer faced with two conflicting orders from superiors. How do you decide?", "marks": 5, "microtopics": ["Decision making", "CSAT", "Administrative scenario"]},
            {"title": "Percentage Calculations", "text": "If the price of rice increases by 25%, by what percentage must a household reduce its consumption to keep expenditure constant? Show the algebraic approach.", "marks": 5, "microtopics": ["Percentage", "Consumer budget", "CSAT"]},
            {"title": "Blood Relations", "text": "Solve: A is the mother of B. B is the sister of C. D is the son of C. What is the relationship of A to D? Explain the logical steps.", "marks": 5, "microtopics": ["Blood relations", "Logical reasoning", "CSAT"]},
            {"title": "Profit & Loss Fundamentals", "text": "A merchant sold 2/3rd of his goods at 20% profit and the rest at a 25% loss. Find his overall profit or loss percentage.", "marks": 5, "microtopics": ["Profit and Loss", "Arithmetic", "CSAT"]},
            {"title": "Passage Inference", "text": "From the passage below, identify what can be logically inferred vs. what is mere assumption: 'Economies that invest in education grow faster than those that do not.' — Can we infer that India will grow faster if it increases education spending?", "marks": 5, "microtopics": ["Inference", "Assumption", "Reading comprehension"]},
        ]
    }
}


def seed_all_subjects():
    db = SessionLocal()
    try:
        # 1. Get admin user
        admin_user = db.query(User).filter(User.email == MASTER_EMAIL).first()
        if not admin_user:
            logger.error(f"User {MASTER_EMAIL} not found. Run setup_master_account.py first.")
            return False

        logger.info(f"✅ Admin user found: {admin_user.email}")

        # 2. Create the master production batch
        batch = db.query(UPSCBatch).filter(
            UPSCBatch.name == "UPSC Mains 2026 — Production Batch"
        ).first()

        if not batch:
            logger.info("Creating Production UPSC Batch...")
            batch = UPSCBatch(
                name="UPSC Mains 2026 — Production Batch",
                description="The comprehensive 12-subject, 12-month UPSC Mains preparation program.",
                start_date=datetime.now().date(),
                end_date=(datetime.now() + timedelta(days=365)).date(),
                created_by_id=admin_user.id
            )
            db.add(batch)
            db.commit()
            db.refresh(batch)
            logger.info(f"  ✅ Batch created: {batch.id}")
        else:
            logger.info(f"  ℹ️  Batch already exists: {batch.id}")

        # 3. Create student profile for the admin user (so they can access student portal)
        profile = db.query(UPSCStudentProfile).filter(
            UPSCStudentProfile.user_id == admin_user.id
        ).first()

        if not profile:
            logger.info("Creating Student Profile for admin user...")
            profile = UPSCStudentProfile(
                user_id=admin_user.id,
                batch_id=batch.id,
                enrollment_date=datetime.now().date(),
                target_year=2026
            )
            db.add(profile)
            db.commit()
            logger.info("  ✅ Student profile created")

        # 4. Create timer config for the batch
        existing_timer = db.query(UPSCTimerConfig).filter(
            UPSCTimerConfig.batch_id == batch.id
        ).first()

        if not existing_timer:
            logger.info("Creating Timer Configs...")
            for phase, duration in [("read", 5), ("write_before", 20), ("study", 60), ("write_after", 20)]:
                tc = UPSCTimerConfig(
                    batch_id=batch.id,
                    phase=phase,
                    duration_minutes=duration,
                    created_by_id=admin_user.id
                )
                db.add(tc)
            db.commit()
            logger.info("  ✅ Timer configs created")

        # 5. Seed each subject as a monthly plan with questions
        subject_keys = list(SUBJECT_DATA.keys())
        for i, (subject_key, subject_info) in enumerate(SUBJECT_DATA.items(), 1):
            logger.info(f"\nProcessing [{i}/12]: {subject_info['title']}")

            # Create monthly plan
            monthly_plan = db.query(UPSCPlan).filter(
                UPSCPlan.batch_id == batch.id,
                UPSCPlan.plan_type == "monthly",
                UPSCPlan.title == subject_info["title"]
            ).first()

            if not monthly_plan:
                monthly_plan = UPSCPlan(
                    batch_id=batch.id,
                    plan_type="monthly",
                    title=subject_info["title"],
                    start_date=(datetime.now() + timedelta(days=30 * (i - 1))).date(),
                    end_date=(datetime.now() + timedelta(days=30 * i)).date(),
                    sequence_order=i,
                )
                db.add(monthly_plan)
                db.commit()
                db.refresh(monthly_plan)
                logger.info(f"  ✅ Monthly plan created")

            # Create a daily plan for Day 1 of this subject
            daily_plan = db.query(UPSCPlan).filter(
                UPSCPlan.parent_plan_id == monthly_plan.id,
                UPSCPlan.plan_type == "daily",
                UPSCPlan.sequence_order == 1
            ).first()

            if not daily_plan:
                daily_plan = UPSCPlan(
                    batch_id=batch.id,
                    plan_type="daily",
                    parent_plan_id=monthly_plan.id,
                    title=f"Day 1: {subject_info['topic']} — Core Concepts",
                    start_date=(datetime.now() + timedelta(days=30 * (i - 1))).date(),
                    end_date=(datetime.now() + timedelta(days=30 * (i - 1))).date(),
                    sequence_order=1,
                )
                db.add(daily_plan)
                db.commit()
                db.refresh(daily_plan)
                logger.info(f"  ✅ Daily plan created")

            # Add questions to the daily plan
            existing_q_count = db.query(UPSCQuestion).filter(
                UPSCQuestion.plan_id == daily_plan.id
            ).count()

            if existing_q_count == 0:
                questions = subject_info["questions"]
                for j, q_data in enumerate(questions, 1):
                    question = UPSCQuestion(
                        plan_id=daily_plan.id,
                        question_number=j,
                        title=q_data["title"],
                        question_text=q_data["text"],
                        marks=q_data["marks"],
                        subject=subject_info["subject"],
                        topic=subject_info["topic"],
                        microtopics=q_data["microtopics"],
                        keywords=q_data.get("keywords", q_data["microtopics"]),
                        created_by_id=admin_user.id
                    )
                    db.add(question)

                db.commit()
                logger.info(f"  ✅ {len(questions)} questions added")
            else:
                logger.info(f"  ℹ️  Questions already exist ({existing_q_count})")

        logger.info("\n" + "="*60)
        logger.info("✅ MASTER UPSC SEEDING COMPLETE!")
        logger.info(f"   Batch: UPSC Mains 2026 — Production Batch")
        logger.info(f"   Subjects seeded: 12")
        logger.info(f"   Questions created: ~120 (10 per subject)")
        logger.info(f"   Timer configs: 4 phases")
        logger.info("="*60)
        return True

    except Exception as e:
        logger.error(f"❌ Seeding failed: {e}")
        import traceback
        traceback.print_exc()
        db.rollback()
        return False
    finally:
        db.close()


if __name__ == "__main__":
    success = seed_all_subjects()
    sys.exit(0 if success else 1)
