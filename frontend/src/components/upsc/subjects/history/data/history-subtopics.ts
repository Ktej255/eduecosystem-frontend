
export interface SubTopic {
    id: string;
    label: string;
    children?: SubTopic[];
}

export const HISTORY_CHAPTER_SUBTOPICS: Record<number, SubTopic[]> = {
    1: [ // Sources for the History of Modern India
        {
            id: '1.1',
            label: 'Archival Materials',
            children: [
                {
                    id: '1.1.1',
                    label: 'Central Government Archives',
                    children: [
                        { id: '1.1.1.1', label: 'National Archives of India (New Delhi)' },
                        { id: '1.1.1.2', label: 'Survey of India Records (James Rennell)' },
                        { id: '1.1.1.3', label: 'Public, Judicial, Legislative Proceedings' },
                        { id: '1.1.1.4', label: 'Home Political Records (1907 onwards)' },
                        { id: '1.1.1.5', label: 'Reforms Office Records (1920-1937)' }
                    ]
                },
                {
                    id: '1.1.2',
                    label: 'Archives of State Governments',
                    children: [
                        { id: '1.1.2.1', label: 'Former British Indian Provinces' },
                        { id: '1.1.2.2', label: 'Princely States (Khalsa Darbar, Peshwa Daftar)' },
                        { id: '1.1.2.3', label: 'Rajasthan State Archives (Bikaner - Jaipur, Jodhpur etc.)' },
                        { id: '1.1.2.4', label: 'Dogra Rule Records (Jammu)' }
                    ]
                },
                {
                    id: '1.1.3',
                    label: 'Archives of Three Presidencies',
                    children: [
                        { id: '1.1.3.1', label: 'Bengal Presidency (Fort William)' },
                        { id: '1.1.3.2', label: 'Madras Presidency (Fort St. George - 1670)' },
                        { id: '1.1.3.3', label: 'Bombay Presidency (Maharashtra Secretariat)' }
                    ]
                },
                {
                    id: '1.1.4',
                    label: 'Archives of Other European Powers',
                    children: [
                        { id: '1.1.4.1', label: 'Portuguese Archives (Goa - 1700-1900)' },
                        { id: '1.1.4.2', label: 'Dutch Records (Cochin, Malabar, Chinsura)' },
                        { id: '1.1.4.3', label: 'French Archives (Chandernagore, Pondicherry -> Paris)' },
                        { id: '1.1.4.4', label: 'Danish Records (Tranquebar, Serampore)' }
                    ]
                },
                {
                    id: '1.1.5',
                    label: 'Judicial Records',
                    children: [
                        { id: '1.1.5.1', label: 'Mayor\'s Court Archives (Madras, Bombay)' },
                        { id: '1.1.5.2', label: 'Supreme Court of Bengal (1774-1861)' },
                        { id: '1.1.5.3', label: 'Wills and Probates' }
                    ]
                },
                { id: '1.1.6', label: 'Published Archives (Parliamentary Papers)' },
                { id: '1.1.7', label: 'Private Archives (Nehru Memorial Museum, etc.)' },
                {
                    id: '1.1.8',
                    label: 'Foreign Repositories',
                    children: [
                        { id: '1.1.8.1', label: 'England (India Office Records, British Museum)' },
                        { id: '1.1.8.2', label: 'France (Archives Nationale)' },
                        { id: '1.1.8.3', label: 'Pakistan (Lahore, Peshawar, Sind)' }
                    ]
                }
            ]
        },
        {
            id: '1.2',
            label: 'Biographies, Memoirs, and Travel Accounts',
            children: [
                { id: '1.2.1', label: 'Missionaries (Bishop Heber, Abbe Dubois)' },
                { id: '1.2.2', label: 'British Travellers (George Forster, James Burnes, etc.)' },
                { id: '1.2.3', label: 'Non-British Travellers (Victor Jacquemont, Baron Charles)' }
            ]
        },
        {
            id: '1.3',
            label: 'Newspapers and Journals',
            children: [
                { id: '1.3.1', label: 'Early Attempts (Hickey\'s Bengal Gazette)' },
                { id: '1.3.2', label: 'Nationalist Press (The Hindu, Kesari, Bengalee, etc.)' },
                { id: '1.3.3', label: 'Revolutionary Publications Abroad (Ghadar, Bande Matram)' }
            ]
        },
        { id: '1.4', label: 'Oral Evidence' },
        {
            id: '1.5',
            label: 'Creative Literature',
            children: [
                { id: '1.5.1', label: 'Bengali Novels (Bankim Chandra - Anandamath)' },
                { id: '1.5.2', label: 'Regional Literature (Gujarati, Tamil, Telugu, Malayalam)' }
            ]
        },
        {
            id: '1.6',
            label: 'Painting',
            children: [
                { id: '1.6.1', label: 'Company Paintings (Patna Kalam)' },
                { id: '1.6.2', label: 'Paintings of the Revolt of 1857' },
                { id: '1.6.3', label: 'Kalighat Paintings' },
                { id: '1.6.4', label: 'Bengal School of Art (Abanindranath Tagore)' }
            ]
        }
    ],
    2: [ // Major Approaches to the History of Modern India
        {
            id: '2.1',
            label: 'Colonial Approach',
            children: [
                { id: '2.1.1', label: 'Orientalist Representation' },
                { id: '2.1.2', label: 'Social Darwinism and "White Man\'s Burden"' },
                { id: '2.1.3', label: 'Pax Britannica' },
                { id: '2.1.4', label: 'Proponents (James Mill, Vincent Smith)' }
            ]
        },
        {
            id: '2.2',
            label: 'Nationalist Approach',
            children: [
                { id: '2.2.1', label: 'Critique of Colonialism (Economic Drain)' },
                { id: '2.2.2', label: 'Unity in Diversity' },
                { id: '2.2.3', label: 'Proponents (Dadabhai Naoroji, R.C. Majumdar)' }
            ]
        },
        {
            id: '2.3',
            label: 'Marxist Approach',
            children: [
                { id: '2.3.1', label: 'Primary Contradiction (Colonial vs Subject)' },
                { id: '2.3.2', label: 'Inner Contradictions (Class Struggle)' },
                { id: '2.3.3', label: 'Proponents (R.P. Dutt, A.R. Desai)' }
            ]
        },
        {
            id: '2.4',
            label: 'Subaltern Approach',
            children: [
                { id: '2.4.1', label: 'Critique of Elitist Bias' },
                { id: '2.4.2', label: 'Two Distinct Movements (Elite vs Subaltern)' },
                { id: '2.4.3', label: 'Proponents (Ranajit Guha)' }
            ]
        },
        { id: '2.5', label: 'Communalist Approach' },
        { id: '2.6', label: 'Cambridge School Approach (Conflict for Power)' },
        { id: '2.7', label: 'Liberal and Neo-Liberal Approach' },
        { id: '2.8', label: 'Feminist Approach (Pandita Ramabai, Katherine Mayo)' }
    ],
    3: [ // Advent of the Europeans in India
        {
            id: '3.1',
            label: 'The Portuguese in India',
            children: [
                { id: '3.1.1', label: 'Quest for Sea Route (Prince Henry, Treaty of Tordesillas)' },
                { id: '3.1.2', label: 'Vasco Da Gama and Arrival at Calicut (1498)' },
                { id: '3.1.3', label: 'Francisco De Almeida (Blue Water Policy)' },
                { id: '3.1.4', label: 'Alfonso de Albuquerque (Consolidation)' },
                { id: '3.1.5', label: 'Nino da Cunha (Shift to Goa)' },
                { id: '3.1.6', label: 'Portuguese Administration and Religious Policy' },
                { id: '3.1.7', label: 'Decline of Portuguese' }
            ]
        },
        {
            id: '3.2',
            label: 'The Dutch',
            children: [
                { id: '3.2.1', label: 'Settlements (Masulipatnam, Pulicat, Surat)' },
                { id: '3.2.2', label: 'Anglo-Dutch Rivalry (Amboyna Massacre, Bedara)' }
            ]
        },
        {
            id: '3.3',
            label: 'The English',
            children: [
                { id: '3.3.1', label: 'Charter of Queen Elizabeth I (1600)' },
                { id: '3.3.2', label: 'Foothold in West and South (Captain Hawkins, Thomas Roe)' },
                { id: '3.3.3', label: 'Foothold in Bengal (Job Charnock, Fort William)' },
                { id: '3.3.4', label: 'Farrukhsiyar\'s Farmans (1717)' }
            ]
        },
        {
            id: '3.4',
            label: 'The French',
            children: [
                { id: '3.4.1', label: 'Foundation (Colbert, Pondicherry)' },
                { id: '3.4.2', label: 'First Carnatic War (1740-48)' },
                { id: '3.4.3', label: 'Second Carnatic War (1749-54) & Dupleix' },
                { id: '3.4.4', label: 'Third Carnatic War (1758-63) & Battle of Wandiwash' },
                { id: '3.4.5', label: 'Causes of French Failure' }
            ]
        },
        { id: '3.5', label: 'The Danes (Tranquebar, Serampore)' },
        {
            id: '3.6',
            label: 'Why the English Succeeded',
            children: [
                { id: '3.6.1', label: 'Structure of Trading Company' },
                { id: '3.6.2', label: 'Naval Superiority & Industrial Revolution' },
                { id: '3.6.3', label: 'Military Skill & Stable Government' }
            ]
        }
    ],
    4: [ // India on the Eve of British Conquest
        {
            id: '4.1',
            label: 'Challenges before the Mughals',
            children: [
                { id: '4.1.1', label: 'External Challenges (Nadir Shah, Abdali)' },
                { id: '4.1.2', label: 'Weak Rulers after Aurangzeb (Bahadur Shah I to Bahadur Shah II)' },
                { id: '4.1.3', label: 'Causes of Decline (Jagirdari Crisis, Zamindars)' }
            ]
        },
        {
            id: '4.2',
            label: 'Rise of Regional States',
            children: [
                { id: '4.2.1', label: 'Successor States (Hyderabad, Awadh, Bengal)' },
                { id: '4.2.2', label: 'Independent Kingdoms (Mysore, Kerala, Rajputs)' },
                { id: '4.2.3', label: 'New States (Marathas, Sikhs, Jats, Rohillas)' }
            ]
        },
        {
            id: '4.3',
            label: 'Socio-Economic Conditions',
            children: [
                { id: '4.3.1', label: 'Agriculture and Trade' },
                { id: '4.3.2', label: 'Status of Education' },
                { id: '4.3.3', label: 'Societal Set-up (Caste, Women, Slavery)' }
            ]
        },
        {
            id: '4.4',
            label: 'Developments in Art, Architecture and Culture',
            children: [
                { id: '4.4.1', label: 'Architecture (Lucknow, Jaipur)' },
                { id: '4.4.2', label: 'Painting (Kangra, Rajputana)' },
                { id: '4.4.3', label: 'Literature (Urdu, Malayalam, Tamil)' }
            ]
        }
    ],
    5: [ // Expansion and Consolidation of British Power in India
        {
            id: '5.1',
            label: 'British Conquest of Bengal',
            children: [
                { id: '5.1.1', label: 'Battle of Plassey (1757) & Dual Govt' },
                { id: '5.1.2', label: 'Battle of Buxar (1764) & Treaty of Allahabad' }
            ]
        },
        {
            id: '5.2',
            label: 'Mysore\'s Resistance',
            children: [
                { id: '5.2.1', label: 'Haidar Ali & First Two Wars' },
                { id: '5.2.2', label: 'Tipu Sultan & Final Two Wars' }
            ]
        },
        {
            id: '5.3',
            label: 'Anglo-Maratha Struggle',
            children: [
                { id: '5.3.1', label: 'First Anglo-Maratha War (Treaty of Salbai)' },
                { id: '5.3.2', label: 'Second & Third Wars (Fall of Peshwa)' }
            ]
        },
        {
            id: '5.4',
            label: 'Conquest of Sindh and Punjab',
            children: [
                { id: '5.4.1', label: 'Conquest of Sindh (1843)' },
                { id: '5.4.2', label: 'Ranjit Singh & Rise of Sikh Power' },
                { id: '5.4.3', label: 'Anglo-Sikh Wars & Annexation' }
            ]
        },
        {
            id: '5.5',
            label: 'Administrative Policy of Expansion',
            children: [
                { id: '5.5.1', label: 'Ring Fence Policy (Warren Hastings)' },
                { id: '5.5.2', label: 'Subsidiary Alliance (Wellesley)' },
                { id: '5.5.3', label: 'Doctrine of Lapse (Dalhousie)' }
            ]
        },
        {
            id: '5.6',
            label: 'Relations with Neighbouring Countries',
            children: [
                { id: '5.6.1', label: 'Anglo-Nepal & Anglo-Burma Relations' },
                { id: '5.6.2', label: 'Anglo-Afghan Relations & NWFP' },
                { id: '5.6.3', label: 'Anglo-Tibetan Relations (Younghusband)' }
            ]
        }
    ],
    6: [ // People's Resistance Against British Before 1857
        {
            id: '6.1',
            label: 'Civil Uprisings',
            children: [
                { id: '6.1.1', label: 'Sanyasi Revolt & Fakir Rebellion' },
                { id: '6.1.2', label: 'Paika Rebellion & Poligar Revolt' },
                { id: '6.1.3', label: 'Kutch, Waghera & Surat Agitations' },
                { id: '6.1.4', label: 'Wahabi & Kuka Movements' }
            ]
        },
        {
            id: '6.2',
            label: 'Peasant Movements',
            children: [
                { id: '6.2.1', label: 'Narkelberia & Pagal Panthis' },
                { id: '6.2.2', label: 'Faraizi Revolt & Moplah Uprisings' }
            ]
        },
        {
            id: '6.3',
            label: 'Tribal Revolts (Mainland)',
            children: [
                { id: '6.3.1', label: 'Pahariyas, Chuar & Kol Mutiny' },
                { id: '6.3.2', label: 'Santhal Rebellion (Sidhu & Kanhu)' },
                { id: '6.3.3', label: 'Khond, Koya & Bhil Revolts' },
                { id: '6.3.4', label: 'Birsa Munda & Tana Bhagat' }
            ]
        },
        {
            id: '6.4',
            label: 'Tribal Revolts (North-East)',
            children: [
                { id: '6.4.1', label: 'Khasi & Singphos Uprisings' },
                { id: '6.4.2', label: 'Ahom Revolt' }
            ]
        },
        {
            id: '6.5',
            label: 'Sepoy Mutinies',
            children: [
                { id: '6.5.1', label: 'Vellore Mutiny (1806)' },
                { id: '6.5.2', label: 'Barrackpore & Other Mutinies' }
            ]
        }
    ],
    7: [ // The Revolt of 1857
        {
            id: '7.1',
            label: 'Causes of the Revolt',
            children: [
                { id: '7.1.1', label: 'Economic & Political Causes' },
                { id: '7.1.2', label: 'Socio-Religious & Military Causes' },
                { id: '7.1.3', label: 'Immediate Cause (Greased Cartridges)' }
            ]
        },
        {
            id: '7.2',
            label: 'Storm Centres & Leaders',
            children: [
                { id: '7.2.1', label: 'Delhi (Bahadur Shah, Bakht Khan)' },
                { id: '7.2.2', label: 'Kanpur (Nana Saheb, Tantia Tope)' },
                { id: '7.2.3', label: 'Lucknow (Begum Hazrat Mahal)' },
                { id: '7.2.4', label: 'Jhansi (Rani Laxmibai)' },
                { id: '7.2.5', label: 'Bihar (Kunwar Singh) & Faizabad (Maulvi Ahmadullah)' }
            ]
        },
        {
            id: '7.3',
            label: 'Suppression & Nature',
            children: [
                { id: '7.3.1', label: 'British Resistance & Recapture' },
                { id: '7.3.2', label: 'Views on Nature (Mutiny vs Independence)' },
                { id: '7.3.3', label: 'Causes of Failure' }
            ]
        },
        {
            id: '7.4',
            label: 'Consequences',
            children: [
                { id: '7.4.1', label: 'Queen\'s Proclamation & Act of 1858' },
                { id: '7.4.2', label: 'Army Reorganisation (White Mutiny)' }
            ]
        }
    ],
    8: [ // Socio-Religious Reform Movements: General Features
        {
            id: '8.1',
            label: 'Factors & Ideological Bases',
            children: [
                { id: '8.1.1', label: 'Impact of British Rule & Social Conditions' },
                { id: '8.1.2', label: 'Rationalism, Humanism & Universalism' }
            ]
        },
        {
            id: '8.2',
            label: 'Betterment of Women',
            children: [
                { id: '8.2.1', label: 'Abolition of Sati & Infanticide' },
                { id: '8.2.2', label: 'Widow Remarriage & Women\'s Education' },
                { id: '8.2.3', label: 'Legislative Measures (Sarda Act, Age of Consent)' }
            ]
        },
        {
            id: '8.3',
            label: 'Struggle Against Caste',
            children: [
                { id: '8.3.1', label: 'Factors Undermining Caste' },
                { id: '8.3.2', label: 'Role of Phule, Ambedkar, Gandhi & Narayana Guru' }
            ]
        }
    ],
    9: [ // A General Survey of Socio-Cultural Reform Movements
        {
            id: '9.1',
            label: 'Reform in Bengal',
            children: [
                { id: '9.1.1', label: 'Brahmo Samaj (Rammohan Roy, Debendranath, Keshab)' },
                { id: '9.1.2', label: 'Young Bengal (Derozio) & Vidyasagar' },
                { id: '9.1.3', label: 'Ramakrishna Mission (Paramahansa & Vivekananda)' }
            ]
        },
        {
            id: '9.2',
            label: 'Reform in Western India',
            children: [
                { id: '9.2.1', label: 'Prarthana Samaj & Paramahansa Mandali' },
                { id: '9.2.2', label: 'Satyashodhak Samaj (Phule) & Dalit Movements' },
                { id: '9.2.3', label: 'Servants of India Society & Social Service League' }
            ]
        },
        {
            id: '9.3',
            label: 'All India & Southern Movements',
            children: [
                { id: '9.3.1', label: 'Arya Samaj (Dayananda Saraswati)' },
                { id: '9.3.2', label: 'Theosophical Movement (Blavatsky, Besant)' },
                { id: '9.3.3', label: 'SNDP, Justice Party & Self-Respect Movement' }
            ]
        },
        {
            id: '9.4',
            label: 'Reform Among Minorities',
            children: [
                { id: '9.4.1', label: 'Muslim Reforms (Wahabi, Aligarh, Deoband)' },
                { id: '9.4.2', label: 'Sikh Reforms (Singh Sabha, Akali)' },
                { id: '9.4.3', label: 'Parsi Reforms (Rahnumai Mazdayasnan)' }
            ]
        }
    ],
    10: [ // Beginning of Modern Nationalism in India
        {
            id: '10.1',
            label: 'Factors in Growth of Nationalism',
            children: [
                { id: '10.1.1', label: 'Impact of Western Thought & English Education' },
                { id: '10.1.2', label: 'Role of Press & Rediscovery of Past' },
                { id: '10.1.3', label: 'Reactionary Policies (Lytton, Ilbert Bill)' }
            ]
        },
        {
            id: '10.2',
            label: 'Political Associations Before INC',
            children: [
                { id: '10.2.1', label: 'Associations in Bengal (Indian Association)' },
                { id: '10.2.2', label: 'Associations in Bombay & Madras' },
                { id: '10.2.3', label: 'Pre-Congress Campaigns' }
            ]
        }
    ],
    11: [ // Indian National Congress: Foundation and the Moderate Phase
        {
            id: '11.1',
            label: 'Foundation of INC',
            children: [
                { id: '11.1.1', label: 'First Session (1885) & A.O. Hume' },
                { id: '11.1.2', label: 'Safety Valve Theory vs Lightning Conductor' }
            ]
        },
        {
            id: '11.2',
            label: 'Era of Moderates (1885–1905)',
            children: [
                { id: '11.2.1', label: 'Leaders & Methodology (3 Ps)' },
                { id: '11.2.2', label: 'Economic Critique (Drain Theory)' },
                { id: '11.2.3', label: 'Indian Councils Act 1892' }
            ]
        }
    ],
    12: [ // Era of Militant Nationalism (1905–1909)
        {
            id: '12.1',
            label: 'Rise of Extremists',
            children: [
                { id: '12.1.1', label: 'Reasons for Growth (International Events, True Nature of Rule)' },
                { id: '12.1.2', label: 'Extremist Ideology & Leaders (Lal-Bal-Pal-Ghosh)' }
            ]
        },
        {
            id: '12.2',
            label: 'Swadeshi & Boycott Movement',
            children: [
                { id: '12.2.1', label: 'Partition of Bengal (1905) & Anti-Partition Campaign' },
                { id: '12.2.2', label: 'Forms of Struggle (Boycott, Samitis, National Education)' },
                { id: '12.2.3', label: 'Impact & Decline' }
            ]
        },
        {
            id: '12.3',
            label: 'Surat Split & Repression',
            children: [
                { id: '12.3.1', label: 'Surat Split (1907)' },
                { id: '12.3.2', label: 'Government Acts (Seditious Meetings, Press Acts)' }
            ]
        },
        {
            id: '12.4',
            label: 'Morley-Minto Reforms (1909)',
            children: [
                { id: '12.4.1', label: 'Separate Electorates & Provisions' },
                { id: '12.4.2', label: 'Evaluation' }
            ]
        }
    ],
    13: [ // First Phase of Revolutionary Activities (1907–1917)
        {
            id: '13.1',
            label: 'Revolutionary Surge',
            children: [
                { id: '13.1.1', label: 'Reasons & Ideology (Irish/Russian Influence)' },
                { id: '13.1.2', label: 'Activities in Bengal (Anushilan, Yugantar, Bagha Jatin)' }
            ]
        },
        {
            id: '13.2',
            label: 'Revolution in Maharashtra & Punjab',
            children: [
                { id: '13.2.1', label: 'Maharashtra (Savarkar, Chapekar Bros)' },
                { id: '13.2.2', label: 'Punjab (Lajpat Rai, Ajit Singh, Pagri Sambhal Jatta)' }
            ]
        },
        {
            id: '13.3',
            label: 'Revolutionary Activities Abroad',
            children: [
                { id: '13.3.1', label: 'London (India House) & Paris' },
                { id: '13.3.2', label: 'The Ghadr Party (San Francisco, Komagata Maru)' },
                { id: '13.3.3', label: 'Berlin Committee & Singapore Mutiny' }
            ]
        }
    ],
    14: [ // First World War and Nationalist Response
        {
            id: '14.1',
            label: 'Home Rule League Movement',
            children: [
                { id: '14.1.1', label: 'Factors & Objective' },
                { id: '14.1.2', label: 'Tilak\'s League vs Besant\'s League' },
                { id: '14.1.3', label: 'Government Repression & Decline' }
            ]
        },
        {
            id: '14.2',
            label: 'Lucknow Session (1916)',
            children: [
                { id: '14.2.1', label: 'Readmission of Extremists' },
                { id: '14.2.2', label: 'Lucknow Pact (Congress-League)' }
            ]
        },
        {
            id: '14.3',
            label: 'Montagu\'s Statement (August 1917)',
            children: [
                { id: '14.3.1', label: 'August Declaration & Significance' },
                { id: '14.3.2', label: 'Indian Objections' }
            ]
        }
    ],
    15: [ // Emergence of Gandhi
        {
            id: '15.1',
            label: 'Montagu-Chelmsford Reforms (1919)',
            children: [
                { id: '15.1.1', label: 'Dyarchy in Provinces' },
                { id: '15.1.2', label: 'Drawbacks & Congress Reaction' }
            ]
        },
        {
            id: '15.2',
            label: 'Gandhi in South Africa & Early India',
            children: [
                { id: '15.2.1', label: 'Satyagraha in South Africa' },
                { id: '15.2.2', label: 'Champaran, Ahmedabad, Kheda' }
            ]
        },
        {
            id: '15.3',
            label: 'Rowlatt Act & Jallianwala Bagh',
            children: [
                { id: '15.3.1', label: 'Rowlatt Satyagraha' },
                { id: '15.3.2', label: 'Jallianwala Bagh Massacre & Hunter Committee' }
            ]
        }
    ],
    16: [ // Non-Cooperation Movement and Khilafat Aandolan
        {
            id: '16.1',
            label: 'Background & Launch',
            children: [
                { id: '16.1.1', label: 'Khilafat Issue' },
                { id: '16.1.2', label: 'Nagpur Session (1920) & Programme' }
            ]
        },
        {
            id: '16.2',
            label: 'Spread & People\'s Response',
            children: [
                { id: '16.2.1', label: 'Role of Students, Women, Peasants' },
                { id: '16.2.2', label: 'Chauri Chaura & Withdrawal' }
            ]
        }
    ],
    17: [ // Emergence of Swarajists, Socialist Ideas, Revolutionary Activities
        {
            id: '17.1',
            label: 'Swarajists vs No-Changers',
            children: [
                { id: '17.1.1', label: 'Pro-Changers (Council Entry) vs No-Changers' },
                { id: '17.1.2', label: 'Formation of Swaraj Party & Activities' }
            ]
        },
        {
            id: '17.2',
            label: 'Emergence of New Forces',
            children: [
                { id: '17.2.1', label: 'Spread of Socialist Ideas & Trade Unionism' },
                { id: '17.2.2', label: 'Revolutionary Activities (HRA, HSRA, Chittagong)' }
            ]
        }
    ],
    18: [ // Simon Commission and the Nehru Report
        {
            id: '18.1',
            label: 'Simon Commission (1927)',
            children: [
                { id: '18.1.1', label: 'Appointment & Boycott' },
                { id: '18.1.2', label: 'Recommendations & Impact' }
            ]
        },
        {
            id: '18.2',
            label: 'Nehru Report (1928)',
            children: [
                { id: '18.2.1', label: 'Main Recommendations' },
                { id: '18.2.2', label: 'Muslim League & Hindu Mahasabha Response' }
            ]
        }
    ],
    19: [ // Civil Disobedience Movement and Round Table Conferences
        {
            id: '19.1',
            label: 'Civil Disobedience Movement',
            children: [
                { id: '19.1.1', label: 'Dandi March & Salt Satyagraha' },
                { id: '19.1.2', label: 'Regional Spread & Gandhi-Irwin Pact' }
            ]
        },
        {
            id: '19.2',
            label: 'Round Table Conferences & Aftermath',
            children: [
                { id: '19.2.1', label: 'First, Second & Third RTCs' },
                { id: '19.2.2', label: 'Communal Award & Poona Pact' }
            ]
        }
    ],
    20: [ // Debates on Future Strategy after CDM
        {
            id: '20.1',
            label: 'First Stage Debate (1934-35)',
            children: [
                { id: '20.1.1', label: 'Constructive Work vs Council Entry' },
                { id: '20.1.2', label: 'Leftist Trend (Nehru, Socialists) & S-G-S vs S-V Strategy' }
            ]
        },
        {
            id: '20.2',
            label: 'Government of India Act, 1935',
            children: [
                { id: '20.2.1', label: 'All India Federation & Provincial Autonomy' },
                { id: '20.2.2', label: 'Evaluation & Nationalists\' Response' }
            ]
        },
        {
            id: '20.3',
            label: 'Second Stage Debate (1937)',
            children: [
                { id: '20.3.1', label: 'Question of Office Acceptance' },
                { id: '20.3.2', label: 'Congress Performance in Elections' }
            ]
        }
    ],
    21: [ // Congress Rule in Provinces (1937-1939)
        {
            id: '21.1',
            label: 'formation & Work under Ministries',
            children: [
                { id: '21.1.1', label: 'Gandhi\'s Advice & Civil Liberties' },
                { id: '21.1.2', label: 'Agrarian Reforms & Attitude towards Labour' },
                { id: '21.1.3', label: 'Social Welfare & Extra-Parliamentary Activities' }
            ]
        },
        {
            id: '21.2',
            label: 'Evaluation & End of Rule',
            children: [
                { id: '21.2.1', label: 'Achievements & Limitations' },
                { id: '21.2.2', label: 'Resignation (1939)' }
            ]
        }
    ],
    22: [ // Nationalist Response in the Wake of World War II
        {
            id: '22.1',
            label: 'Congress Crisis (1939)',
            children: [
                { id: '22.1.1', label: 'Haripura & Tripuri Sessions (Subhash Bose)' },
                { id: '22.1.2', label: 'Gandhi-Bose Ideological Conflict & Forward Bloc' }
            ]
        },
        {
            id: '22.2',
            label: 'Ideological Comparison: Gandhi vs Bose',
            children: [
                { id: '22.2.1', label: 'Non-Violence, Means & Ends, Militarism' },
                { id: '22.2.2', label: 'Form of Government, Economy, Religion' },
                { id: '22.2.3', label: 'Caste, Women, Education' }
            ]
        },
        {
            id: '22.3',
            label: 'World War II & Initial Response',
            children: [
                { id: '22.3.1', label: 'Congress Offer & Linlithgow\'s Statement' },
                { id: '22.3.2', label: 'Resignation of Congress Ministries' }
            ]
        },
        {
            id: '22.4',
            label: 'August Offer & Individual Satyagraha',
            children: [
                { id: '22.4.1', label: 'August Offer (1940) Terms & Rejection' },
                { id: '22.4.2', label: 'Individual Satyagraha (Vinoba Bhave, Nehru)' }
            ]
        },
        {
            id: '22.5',
            label: 'Cripps Mission (1942)',
            children: [
                { id: '22.5.1', label: 'Proposals (Dominion Status, Constituent Assembly)' },
                { id: '22.5.2', label: 'Reasons for Failure' }
            ]
        }
    ],
    23: [ // Quit India Movement, Demand for Pakistan, and the INA
        {
            id: '23.1',
            label: 'Quit India Movement (1942)',
            children: [
                { id: '23.1.1', label: 'Launch (Aug 8) & "Do or Die"' },
                { id: '23.1.2', label: 'Spread, Underground Activity & Parallel Governments' },
                { id: '23.1.3', label: 'Government Repression & Gandhi\'s Fast' }
            ]
        },
        {
            id: '23.2',
            label: 'Famine & Constitutional Formulas',
            children: [
                { id: '23.2.1', label: 'Famine of 1943' },
                { id: '23.2.2', label: 'C. Rajagopalachari Formula & Desai-Liaqat Pact' },
                { id: '23.2.3', label: 'Wavell Plan & Shimla Conference (1945)' }
            ]
        },
        {
            id: '23.3',
            label: 'Indian National Army (INA)',
            children: [
                { id: '23.3.1', label: 'Origin (Mohan Singh) & First Phase' },
                { id: '23.3.2', label: 'Subhas Bose\'s Leadership & Provisional Government' },
                { id: '23.3.3', label: 'Imphal Campaign & Retreat' }
            ]
        }
    ],
    24: [ // Post-War National Scenario
        {
            id: '24.1',
            label: 'Post-War Upsurges (1945-46)',
            children: [
                { id: '24.1.1', label: 'INA Trials & Public Reaction' },
                { id: '24.1.2', label: 'The Three Upsurges (Calcutta & RIN Revolt)' },
                { id: '24.1.3', label: 'Election Results & Change in Govt Attitude' }
            ]
        },
        {
            id: '24.2',
            label: 'Cabinet Mission & Interim Government',
            children: [
                { id: '24.2.1', label: 'Cabinet Mission Plan (Provisions & Reactions)' },
                { id: '24.2.2', label: 'Direct Action Day & Communal Holocaust' },
                { id: '24.2.3', label: 'Formation & Functioning of Interim Government' }
            ]
        },
        {
            id: '24.3',
            label: 'Growth of Communalism',
            children: [
                { id: '24.3.1', label: 'Stages & Causes of Communalism' },
                { id: '24.3.2', label: 'Evolution of Two-Nation Theory (1887-1940)' }
            ]
        }
    ],
    25: [ // Independence with Partition
        {
            id: '25.1',
            label: 'Towards Independence (1947)',
            children: [
                { id: '25.1.1', label: 'Attlee\'s Statement (Feb 20) & Mountbatten Plan (June 3)' },
                { id: '25.1.2', label: 'Indian Independence Act 1947 & Partition Process' },
                { id: '25.1.3', label: 'Integration of Princely States (Patel\'s Role)' }
            ]
        }
    ],
    26: [ // Constitutional, Administrative, and Judicial Developments
        {
            id: '26.1',
            label: 'Constitutional Development',
            children: [
                { id: '26.1.1', label: 'Company Rule Acts (1773-1853)' },
                { id: '26.1.2', label: 'Crown Rule Acts (1858-1935) & Simon Commission' }
            ]
        },
        {
            id: '26.2',
            label: 'Administrative Evolution',
            children: [
                { id: '26.2.1', label: 'Civil Services (Cornwallis to Lee Commission)' },
                { id: '26.2.2', label: 'Evolution of Police & Military' },
                { id: '26.2.3', label: 'Local Self-Government (Mayo, Ripon, 1919)' }
            ]
        },
        {
            id: '26.3',
            label: 'Judiciary',
            children: [
                { id: '26.3.1', label: 'Reforms under Hastings, Cornwallis, Bentinck' },
                { id: '26.3.2', label: 'High Courts (1865) & Federal Court (1937)' }
            ]
        }
    ],
    27: [ // Survey of British Policies in India
        {
            id: '27.1',
            label: 'Administrative & Social Policies',
            children: [
                { id: '27.1.1', label: 'Divide and Rule & Attitude towards Congress' },
                { id: '27.1.2', label: 'Labour Legislations (Factory Acts) & Press Restrictions' },
                { id: '27.1.3', label: 'Social & Cultural Policy (New Thought, Missionaries)' }
            ]
        },
        {
            id: '27.2',
            label: 'Land Revenue Systems',
            children: [
                { id: '27.2.1', label: 'Permanent Settlement (Zamindari)' },
                { id: '27.2.2', label: 'Ryotwari System (Munro)' },
                { id: '27.2.3', label: 'Mahalwari System (Mackenzie/Bird)' }
            ]
        }
    ],
    28: [ // Economic Impact of British Rule
        {
            id: '28.1',
            label: 'Deindustrialisation & Agrarian Crisis',
            children: [
                { id: '28.1.1', label: 'Deindustrialisation, Ruralisation & Poverty' },
                { id: '28.1.2', label: 'Commercialisation of Agriculture & Famines' }
            ]
        },
        {
            id: '28.2',
            label: 'Industry & Economic Critique',
            children: [
                { id: '28.2.1', label: 'Stages of Colonialism & Modern Industry' },
                { id: '28.2.2', label: 'Economic Drain Theory (Naoroji, Dutt)' }
            ]
        }
    ],
    29: [ // Development of Indian Press
        {
            id: '29.1',
            label: 'Early Regulations & Struggle',
            children: [
                { id: '29.1.1', label: 'Early Acts (Wellesley, Metcalfe, 1857)' },
                { id: '29.1.2', label: 'Vernacular Press Act (1878) & Tilak\'s Role' }
            ]
        },
        {
            id: '29.2',
            label: 'Press in 20th Century',
            children: [
                { id: '29.2.1', label: 'Press Acts of 1910 & 1931' },
                { id: '29.2.2', label: 'WWII Restrictions' }
            ]
        }
    ],
    30: [ // Development of Education
        {
            id: '30.1',
            label: 'Under Company Rule',
            children: [
                { id: '30.1.1', label: 'Orientalist-Anglicist Controversy & Macaulay\'s Minute' },
                { id: '30.1.2', label: 'Wood\'s Despatch (1854)' }
            ]
        },
        {
            id: '30.2',
            label: 'Under Crown Rule',
            children: [
                { id: '30.2.1', label: 'Hunter (1882) & Raleigh (1902) Commissions' },
                { id: '30.2.2', label: 'Sadler Commission (1917) & Hartog Committee (1929)' }
            ]
        },
        {
            id: '30.3',
            label: 'National Schemes',
            children: [
                { id: '30.3.1', label: 'Wardha Scheme (Basic Education) & Sargent Plan' }
            ]
        }
    ],
    31: [ // Peasant Movements 1857–1947
        {
            id: '31.1',
            label: 'Early Peasant Movements',
            children: [
                { id: '31.1.1', label: 'Indigo Revolt, Pabna Leagues & Deccan Riots' },
                { id: '31.1.2', label: 'Changed Nature after 1857' }
            ]
        },
        {
            id: '31.2',
            label: '20th Century & Post-War',
            children: [
                { id: '31.2.1', label: 'Kisan Sabhas, Eka, Mappila & Bardoli' },
                { id: '31.2.2', label: 'Tebhaga & Telangana Movements' }
            ]
        }
    ],
    32: [ // The Movement of the Working Class
        {
            id: '32.1',
            label: 'Early Trade Unionism',
            children: [
                { id: '32.1.1', label: 'Early Efforts & Formation of AITUC (1920)' },
                { id: '32.1.2', label: 'Trade Union Act (1926) & Trade Disputes Act (1929)' }
            ]
        },
        {
            id: '32.2',
            label: 'Radicalisation & Politics',
            children: [
                { id: '32.2.1', label: 'Meerut Conspiracy & Left Influence' },
                { id: '32.2.2', label: 'Working Class in National Struggle' }
            ]
        }
    ],
    33: [ // Challenges before the Newborn Nation
        {
            id: '33.1',
            label: 'Partition & Integration',
            children: [
                { id: '33.1.1', label: 'Radcliffe Award, Riots & Refugee Crisis' },
                { id: '33.1.2', label: 'Division of Resources & Assassination of Gandhi' }
            ]
        },
        {
            id: '33.2',
            label: 'Communists & Post-Independence',
            children: [
                { id: '33.2.1', label: 'Communist Insurgency & Shift to Constitutionalism' }
            ]
        }
    ],
    34: [ // The Indian States
        {
            id: '34.1',
            label: 'Evolution of British Policy',
            children: [
                { id: '34.1.1', label: 'Ring Fence, Subsidiary Alliance & Subordinate Isolation' },
                { id: '34.1.2', label: 'Subordinate Union, Curzon\'s Approach & Butler Committee' }
            ]
        },
        {
            id: '34.2',
            label: 'Integration & Merger',
            children: [
                { id: '34.2.1', label: 'Patel\'s Role & Accession (Junagarh, Hyderabad, Kashmir)' },
                { id: '34.2.2', label: 'Reorganisation & Parts A, B, C States' }
            ]
        }
    ],
    35: [ // Making of the Constitution for India
        {
            id: '35.1',
            label: 'Constituent Assembly',
            children: [
                { id: '35.1.1', label: 'Formation, Composition & Objectives Resolution' },
                { id: '35.1.2', label: 'Committees & Consensus Building' }
            ]
        },
        {
            id: '35.2',
            label: 'Drafting & Adoption',
            children: [
                { id: '35.2.1', label: 'Drafting Committee (Ambedkar)' },
                { id: '35.2.2', label: 'Enactment (26 Nov 1949) & Enforcement (26 Jan 1950)' }
            ]
        }
    ],
    36: [ // The Evolution of Nationalist Foreign Policy
        {
            id: '36.1',
            label: 'Pre-Independence Stance',
            children: [
                { id: '36.1.1', label: 'Anti-Imperialism & Pan-Asian Feeling' },
                { id: '36.1.2', label: 'Anti-Fascism & World War Stance' }
            ]
        },
        {
            id: '36.2',
            label: 'Post-Independence Policy',
            children: [
                { id: '36.2.1', label: 'Panchsheel & Non-Alignment (NAM)' },
                { id: '36.2.2', label: 'Relations with Superpowers' }
            ]
        }
    ],
    37: [ // First General Elections
        {
            id: '37.1',
            label: 'Election Machinery',
            children: [
                { id: '37.1.1', label: 'Election Commission & Legal Framework' },
                { id: '37.1.2', label: 'Challenges (Illiteracy, Refugees)' }
            ]
        },
        {
            id: '37.2',
            label: 'Results & Analysis',
            children: [
                { id: '37.2.1', label: 'Parties in Fray & Congress Dominance' },
                { id: '37.2.2', label: 'Emergence of Opposition' }
            ]
        }
    ],
    38: [ // Developments under Nehru's Leadership
        {
            id: '38.1',
            label: 'Building the Nation',
            children: [
                { id: '38.1.1', label: 'Political Stability & Parliamentary Democracy' },
                { id: '38.1.2', label: 'The Language Debate (Official Language)' }
            ]
        },
        {
            id: '38.2',
            label: 'States Reorganisation',
            children: [
                { id: '38.2.1', label: 'Dhar Commission & JVP Committee' },
                { id: '38.2.2', label: 'Demand for Linguistic States' }
            ]
        }
    ],
    39: [ // After Nehru
        {
            id: '39.1',
            label: 'Lal Bahadur Shastri Years',
            children: [
                { id: '39.1.1', label: 'Succession & Early Life' },
                { id: '39.1.2', label: 'Green & White Revolutions' },
                { id: '39.1.3', label: 'Indo-Pak War 1965 & Tashkent Declaration' }
            ]
        },
        {
            id: '39.2',
            label: 'Indira Gandhi: First Phase (1966-1977)',
            children: [
                { id: '39.2.1', label: 'Congress Split (1969) & 1971 Elections' },
                { id: '39.2.2', label: 'Bangladesh Liberation War (1971)' },
                { id: '39.2.3', label: 'Steps for Equity (Bank Nationalisation, Privy Purses)' }
            ]
        },
        {
            id: '39.3',
            label: 'The Emergency (1975-1977)',
            children: [
                { id: '39.3.1', label: 'JP Movement & Allahabad HC Verdict' },
                { id: '39.3.2', label: 'Declaration & Excesses' },
                { id: '39.3.3', label: '42nd Amendment Act' }
            ]
        },
        {
            id: '39.4',
            label: 'Janata Party Years (1977-1980)',
            children: [
                { id: '39.4.1', label: 'Morarji Desai Govt & Restoration of Rights' },
                { id: '39.4.2', label: 'Fall of Janata & Charan Singh' },
                { id: '39.4.3', label: '44th Amendment Act' }
            ]
        }
    ]
};
