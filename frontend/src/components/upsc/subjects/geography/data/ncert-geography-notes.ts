export interface NCERTNote {
    chapterId: string;
    facts: string[];
    pyqConcepts: string[];
}

export const NCERT_GEOGRAPHY_NOTES: Record<string, NCERTNote> = {
    "c11-p-1": {
        chapterId: "c11-p-1",
        facts: [
            "Geography term coined by: Eratosthenes (Greek scholar).",
            "Areal Differentiation: Study of phenomena that vary over space.",
            "Branches: Physical (Geomorphology, Climatology, etc.) and Human (Population, Social, etc.)."
        ],
        pyqConcepts: [
            "Importance of geography as an integrating discipline.",
            "Causal relationship between physical and cultural features."
        ]
    },
    "c11-p-2": {
        chapterId: "c11-p-2",
        facts: [
            "Age of Earth: 4.6 billion years.",
            "Big Bang: Occurred 13.7 billion years ago (Expanding Universe Hypothesis).",
            "Terrestrial vs Jovian: Inner planets (rocky, dense) vs Outer planets (gas giants, less dense)."
        ],
        pyqConcepts: [
            "Focus on the process of differentiation which led to the creation of Earth's layers.",
            "Understanding 'Degassing' as the source of the primordial atmosphere."
        ]
    },
    "c11-i-1": {
        chapterId: "c11-i-1",
        facts: [
            "Latitudinal extent: 8°4'N to 37°6'N.",
            "Longitudinal extent: 68°7'E to 97°25'E.",
            "Standard Meridian: 82°30'E (passed through Mirzapur).",
            "Total Area: 3.28 million sq km (2.4% of world area)."
        ],
        pyqConcepts: [
            "Implications of the large longitudinal extent (approx 2 hours time gap).",
            "Significance of India's central position in the Indian Ocean."
        ]
    },
    "c11-i-2": {
        chapterId: "c11-i-2",
        facts: [
            "<strong>Geological Divisions:</strong> Peninsular Block, Himalayas & Peninsular Mountains, Indo-Ganga-Brahmaputra Plain.",
            "<strong>Karewas:</strong> Glacial clay deposits in Kashmir Himalayas, famous for Saffron (Zaffran).",
            "<strong>Bhabar:</strong> 8-10 km wide pebble zone at Shiwalik foot where streams disappear.",
            "<strong>Terai:</strong> Marshy, silty zone south of Bhabar with thick forests.",
            "<strong>Highest Peak (Peninsula):</strong> Anamudi (2,695 m) in Anaimalai Hills."
        ],
        pyqConcepts: [
            "Difference between Western Ghats (continuous, higher) and Eastern Ghats (dissected, lower).",
            "Significance of the Malabar coast's <strong>Kayals</strong> for fishing and navigation.",
            "Structural differences between the stable Peninsular Block and the tectonic Himalayas."
        ]
    },
    "c11-i-3": {
        chapterId: "c11-i-3",
        facts: [
            "<strong>Dendritic Pattern:</strong> Tree-branch like pattern (e.g., Ganga).",
            "<strong>Radial Pattern:</strong> Flowing in all directions from a hill (e.g., Amarkantak rivers).",
            "<strong>Himalayan Rivers:</strong> Perennial, fed by snow and rain, geologically young.",
            "<strong>Peninsular Rivers:</strong> Seasonal, geologically older, characterized by fixed courses.",
            "<strong>Dakshin Ganga:</strong> Godavari (Largest Peninsular system)."
        ],
        pyqConcepts: [
            "Difference between <strong>Antecedent</strong> (Indus, Brahmaputra) and Non-antecedent rivers.",
            "Importance of the <strong>Water Divide</strong> (Delhi ridge) between Indus and Ganga.",
            "Rift Valley formation of Narmada and Tapi (West flowing)."
        ]
    },
    "c11-i-4": {
        chapterId: "c11-i-4",
        facts: [
            "<strong>ITCZ:</strong> Inter Tropical Convergence Zone shifts to 20°-25° N in summer (Monsoon Trough).",
            "<strong>Western Disturbances:</strong> Winter rain in NW India, originating in the Mediterranean.",
            "<strong>Burst of Monsoon:</strong> Associated with the sudden onset of the <strong>Easterly Jet Stream</strong>.",
            "<strong>October Heat:</strong> Oppressive weather during the retreating monsoon due to high temp and humidity.",
            "<strong>Amw (Koppen):</strong> Monsoon type with short dry season (Malabar/Western Coast)."
        ],
        pyqConcepts: [
            "The role of the <strong>Tibetan Plateau</strong> and Jet Streams in the Indian monsoon mechanism.",
            "Impact of <strong>El-Nino</strong> (negative) and La-Nina (positive) on Indian rainfall.",
            "Climatic divide created by the Himalayas preventing cold central Asian winds."
        ]
    },
    "c11-i-5": {
        chapterId: "c11-i-5",
        facts: [
            "<strong>Tropical Deciduous:</strong> Most widespread forests in India; further divided into Moist and Dry.",
            "<strong>Tropical Evergreen:</strong> Found in heavy rainfall areas (>200 cm); no definite shedding time.",
            "<strong>Mangroves:</strong> Largest area in Sunderbans, WB; trees have pneumatophores for breathing.",
            "<strong>Project Tiger:</strong> Launched in 1973 for Bengal tiger conservation.",
            "<strong>Social Forestry:</strong> Management of forests for environmental and rural development."
        ],
        pyqConcepts: [
            "Characteristics of <strong>Montane Forests</strong> showing succession from tropical to tundra.",
            "Distribution of semi-arid vegetation in the thorn forests of NW India.",
            "The ecological significance of <strong>Silent Valley</strong> in the Western Ghats."
        ]
    },
    "c11-i-6": {
        chapterId: "c11-i-6",
        facts: [
            "<strong>Alluvial Soils:</strong> Most widespread (40%); rich in potash, poor in phosphate; depositional.",
            "<strong>Black Soils (Regur):</strong> High clay content; 'self-ploughing' due to cracks; ideal for cotton.",
            "<strong>Laterite Soils:</strong> Formed by leaching in heavy rain areas; rich in iron oxide/aluminum.",
            "<strong>Arid Soils:</strong> Sandy, saline, lack humus; found in Western Rajasthan.",
            "<strong>Usara Soils:</strong> Saline and infertile; contain sodium, potassium, and magnesium."
        ],
        pyqConcepts: [
            "Difference between <strong>Khadar</strong> (new alluvium) and <strong>Bhangar</strong> (old alluvium).",
            "Suitability of <strong>Red Laterite</strong> soils for tree crops like Cashewnuts (TN, Kerala).",
            "Soil scientific classification by ICAR based on USDA Soil Taxonomy."
        ]
    },
    "c11-i-7": {
        chapterId: "c11-i-7",
        facts: [
            "<strong>Floods:</strong> Most recurring natural hazard in India; exacerbated by deforestation and rapid runoff.",
            "<strong>Earthquakes:</strong> Classified into Zones II to V (High damage risk in V - Himalayas/NE).",
            "<strong>Tropical Cyclones:</strong> Originate mainly between 5°-20° N in Bay of Bengal/Arabian Sea.",
            "<strong>Landslides:</strong> Highly prevalent in geologically young Himalayas and Western Ghats.",
            "<strong>NDMA:</strong> Apex body for disaster management, chaired by the Prime Minister."
        ],
        pyqConcepts: [
            "Significance of the <strong>Latur Earthquake</strong> (Peninsular block) in seismic studies.",
            "Phases of Disaster Management: Prevention, Mitigation, Preparedness, Response, Recovery.",
            "Trigger factors of the 2004 Indian Ocean Tsunami (Sumatra earthquake)."
        ]
    },
    "c12-h-1": {
        chapterId: "c12-h-1",
        facts: [
            "<strong>Determinism:</strong> Philosophy where human actions are dictated by nature (Primitive stage).",
            "<strong>Possibilism:</strong> Philosophy where humans manipulate nature through technology (e.g., cultivation).",
            "<strong>Neodeterminism:</strong> Griffith Taylor's 'Stop and Go' concept; middle path between extremes.",
            "<strong>Anthropogeographie:</strong> Famous book by Friedrich Ratzel (Father of Human Geography).",
            "<strong>Quantitative Revolution:</strong> Use of statistical models in geography; later critiqued by welfare schools."
        ],
        pyqConcepts: [
            "Difference between <strong>Humanization of Nature</strong> and Naturalization of Humans.",
            "Evolution of Human Geography through various schools (Welfare, Radical, Behavioral).",
            "Sub-fields of Social and Political geography (e.g., Medical, Military, Gender)."
        ]
    },
    "c12-h-2": {
        chapterId: "c12-h-2",
        facts: [
            "<strong>Population Density:</strong> Ratio of people to land; Asia is the most populous continent.",
            "<strong>CBR & CDR:</strong> Crude Birth Rate and Crude Death Rate are measured per thousand population.",
            "<strong>Migration:</strong> Influenced by Push factors (Unemployment, War) and Pull factors (Jobs, Peace).",
            "<strong>Demographic Transition:</strong> Three-stage model explaining the shift from high births/deaths to low births/deaths.",
            "<strong>Malthusian Theory:</strong> Warning that population grows faster than food supply, leading to a crash."
        ],
        pyqConcepts: [
            "The impact of health and sanitation improvements on the <strong>Second Stage</strong> of transition.",
            "Geographical and Economic factors (Water, Minerals, Urbanization) influencing population distribution.",
            "Difference between Natural Growth (Births - Deaths) and Actual Growth (Natural + Net Migration)."
        ]
    },
    "c12-h-3": {
        chapterId: "c12-h-3",
        facts: [
            "<strong>Sex Ratio:</strong> Calculated in India as females per 1000 males; unfavorable in some Asian nations.",
            "<strong>Age-Sex Pyramid:</strong> Expanding (Wide base), Constant (Bell-shaped), Declining (Narrow base).",
            "<strong>Working Population:</strong> Age group 15-59; supports dependents (children and elderly).",
            "<strong>Literacy:</strong> Indicator of socio-economic development; reveals status of women.",
            "<strong>Occupational Structure:</strong> Distribution of work across Primary, Secondary, Tertiary sectors."
        ],
        pyqConcepts: [
            "Reasons for high sex ratio in <strong>European</strong> countries (Women's status, Migration).",
            "Characteristics of an <strong>Aging Population</strong> (increasing elderly due to quality healthcare).",
            "Correlation between urbanization and change in occupational structure (Primary to Tertiary)."
        ]
    },
    "c12-h-4": {
        chapterId: "c12-h-4",
        facts: [
            "<strong>Human Development Index (HDI):</strong> Introduced by Dr. Mahbub ul Haq; core pillars are Health, Education, Resources.",
            "<strong>Capability Approach:</strong> Advocated by Amartya Sen; focuses on building human capabilities.",
            "<strong>Pillars of Human Development:</strong> Equity, Sustainability, Productivity, and Empowerment.",
            "<strong>HDI Top Rankers:</strong> Norway, Switzerland typically rank highest due to superior health and education metrics.",
            "<strong>Welfare Approach:</strong> Emphasizes government expenditure on education, health, and social security."
        ],
        pyqConcepts: [
            "Difference between <strong>Growth</strong> (quantitative) and <strong>Development</strong> (qualitative).",
            "Four Pillars of Human Development and their significance in policy making.",
            "Approaches to Human Development: Income, Welfare, Minimum Needs, and Capability."
        ]
    },
    "c12-h-5": {
        chapterId: "c12-h-5",
        facts: [
            "<strong>Primary Activities:</strong> Direct reliance on environment (hunting, gathering, agriculture, mining).",
            "<strong>Subsistence vs. Commercial:</strong> Subsistence is for family consumption; Commercial is for market sale.",
            "<strong>Nomadic Herding vs. Commercial Livestock Rearing:</strong> Nomadic is traditional and seasonal (Transhumance); Commercial is organized and capital intensive.",
            "<strong>Plantation Agriculture:</strong> European introduction in colonies; single cash crop, large estates.",
            "<strong>Viticulture:</strong> Grape cultivation, a specialty of the Mediterranean region."
        ],
        pyqConcepts: [
            "Characteristics of <strong>Extensive Commercial Grain Farming</strong> (Eurasian Steppes, N. American Prairies).",
            "Differences between Intensive Subsistence Agriculture (Wet Paddy vs. other crops).",
            "Mining methods: Surface (open-cast) vs. Underground (shaft) mining operations."
        ]
    },
    "c12-h-6": {
        chapterId: "c12-h-6",
        facts: [
            "<strong>Secondary Activities:</strong> Add value to natural resources by transforming raw materials into valuable products.",
            "<strong>Location Factors:</strong> Access to market, raw material, labor, and power supply (Weber's Theory).",
            "<strong>Classification by Size:</strong> Cottage (household), Small Scale, and Large Scale industries.",
            "<strong>Footloose Industries:</strong> Not tied to raw material sources; depend on component parts and can be located anywhere.",
            "<strong>High-Tech Industry:</strong> Focus on R&D, white-collar workers (e.g., Silicon Valley)."
        ],
        pyqConcepts: [
            "Characteristics of the <strong>Ruhr Industrial Region</strong> (Germany) and its shift from heavy industry.",
            "Differences between Agribusiness and traditional agriculture.",
            "Significance of <strong>Agglomeration Economies</strong> in industrial location."
        ]
    },
    "c12-h-7": {
        chapterId: "c12-h-7",
        facts: [
            "<strong>Tertiary Activities:</strong> Trade, transport, communication, and services.",
            "<strong>Quaternary Activities:</strong> Knowledge-based sector (Information processing, research).",
            "<strong>Quinary Activities:</strong> Highest level decision makers, policy formulators ('Gold collar' professions).",
            "<strong>Outsourcing (BPO/KPO):</strong> Contracting business operations to external agencies for efficiency and cost reduction.",
            "<strong>Medical Tourism:</strong> Travel for medical treatment across borders (India, Thailand are major hubs)."
        ],
        pyqConcepts: [
            "Impact of the <strong>Digital Divide</strong> on global development inequalities.",
            "Distinction between BPO (Business Process) and KPO (Knowledge Process) outsourcing.",
            "Role of the tertiary sector in driving the economy of developed nations."
        ]
    },
    "c12-h-8": {
        chapterId: "c12-h-8",
        facts: [
            "<strong>Trans-Continental Railways:</strong> Connect ends of continents (e.g., Trans-Siberian, Trans-Canadian).",
            "<strong>Ocean Routes:</strong> North Atlantic route is the busiest globally, connecting industrialized Europe and North America.",
            "<strong>Important Canals:</strong> Suez Canal (Mediterranean to Red Sea) and Panama Canal (Atlantic to Pacific).",
            "<strong>Pipelines:</strong> Used extensively for liquids and gases (e.g., Big Inch in USA).",
            "<strong>Cyberspace:</strong> The world of electronic digital space (Internet), revolutionized communication."
        ],
        pyqConcepts: [
            "Geopolitical and economic significance of the <strong>Suez and Panama Canals</strong>.",
            "Comparison of transport costs and efficiency among Road, Rail, Water, and Air transport.",
            "Impact of the Internet on global communication and trade."
        ]
    },
    "c12-h-9": {
        chapterId: "c12-h-9",
        facts: [
            "<strong>International Trade:</strong> Exchange of goods/services across national borders, based on comparative advantage.",
            "<strong>Balance of Trade:</strong> Difference between value of exports and imports (Favorable vs. Unfavorable).",
            "<strong>WTO:</strong> World Trade Organization (1995), regulates international trade rules.",
            "<strong>Regional Trade Blocs:</strong> Enhance trade among members (e.g., ASEAN, EU, NAFTA/USMCA).",
            "<strong>Dumping:</strong> Selling goods in a foreign market below cost price."
        ],
        pyqConcepts: [
            "Types of ports based on location (Inland vs. Out ports) and function (Entrepot, Naval, Packet station).",
            "Pros and cons of <strong>Free Trade</strong> and trade liberalization for developing nations.",
            "Role of the WTO in resolving international trade disputes."
        ]
    },
    "c12-h-10": {
        chapterId: "c12-h-10",
        facts: [
            "<strong>Rural Settlements:</strong> Dominated by primary activities; can be Compact/Nucleated or Dispersed/Scattered.",
            "<strong>Urban Settlements:</strong> High density, non-agricultural activities; functional classification (Administrative, Defensive, Cultural).",
            "<strong>Conurbation:</strong> Continuous urban area formed by merging of separate cities (e.g., Greater London, Tokyo).",
            "<strong>Megalopolis:</strong> 'Super city', a chain of metropolitan areas (e.g., Boston to Washington D.C.).",
            "<strong>Urban Sprawl:</strong> Unplanned outward expansion of urban areas, leading to environmental and traffic issues."
        ],
        pyqConcepts: [
            "Factors influencing settlement types (Water supply, land, building material, defense).",
            "Patterns of rural settlements (Linear, Rectangular, Circular, Star-like).",
            "Problems of human settlements in developing countries (Slums, sanitation, congestion)."
        ]
    },
    "c12-ie-1": {
        chapterId: "c12-ie-1",
        facts: [
            "India is the first most populous country in the world (surpassed China in 2023).",
            "<strong>First Census:</strong> 1872 (Partial); First complete census was in 1881.",
            "<strong>Density (2011):</strong> 382 persons per sq km; Highest in Bihar (1106), Lowest in Arunachal (17).",
            "<strong>Growth Phases:</strong> 1901-21 (Stagnant), 1921-51 (Steady), 1951-81 (Explosion), 1981-Present (Slowing).",
            "<strong>Physiological Density:</strong> Total Population / Net Cultivated Area."
        ],
        pyqConcepts: [
            "Difference between <strong>Agricultural Density</strong> and Physiological Density.",
            "Spatial variation in growth: Southern states (Kerala, TN) show lower growth than Northern/Central states.",
            "Challenges of the large <strong>Adolescent population</strong> (20.9% in 2011)."
        ]
    },
    "c12-ie-2": {
        chapterId: "c12-ie-2",
        facts: [
            "<strong>Migration Streams:</strong> Rural-to-Rural (Female dominated due to marriage); Rural-to-Urban (Male dominated for jobs).",
            "<strong>Internal Migration:</strong> Movement within the country; Intrastate (within state) and Interstate (between states).",
            "<strong>Causes:</strong> Push factors (poverty, lack of facilities) and Pull factors (employment, better education).",
            "<strong>International Migration:</strong> India is a major source of the global diaspora (Middle East, USA, UK).",
            "<strong>Remittances:</strong> Major source of foreign exchange for states like Kerala and Punjab."
        ],
        pyqConcepts: [
            "Impact of migration on the <strong>Demographic Profile</strong> of both origin and destination regions.",
            "Environmental consequences of unplanned migration in mega-cities (slums, pollution).",
            "Brain Drain vs. Brain Gain concept in international migration."
        ]
    },
    "c12-ie-3": {
        chapterId: "c12-ie-3",
        facts: [
            "<strong>India's Rank:</strong> Consistently in the 'Medium' category of global HDI (approx 131 in 2020).",
            "<strong>State Variations:</strong> Kerala ranks highest in HDI; Bihar, Odisha, Chhattisgarh among the lowest.",
            "<strong>Literacy:</strong> India's overall literacy is 74.04% (2011); Huge gender gap remains in some states.",
            "<strong>GII (Gender Inequality Index):</strong> Measures loss of development due to inequality between women and men.",
            "<strong>Beti Bachao Beti Padhao:</strong> Flagship scheme to address declining child sex ratio and promote education."
        ],
        pyqConcepts: [
            "The shift from <strong>Income Approach</strong> to human-centric Development Approach (Sen & Haq).",
            "Correlation between high literacy and low infant mortality rates in states like Kerala.",
            "The impact of the <strong>National Youth Policy (2014)</strong> on human resource development."
        ]
    },
    "c12-ie-4": {
        chapterId: "c12-ie-4",
        facts: [
            "<strong>Rural Settlement Types:</strong> Clustered (UP/Bihar), Semi-clustered (Gujarat), Hamleted (Hills), Dispersed (Kerala/Meghalaya).",
            "<strong>Evolution of Towns:</strong> Ancient (Varanasi), Medieval (Hyderabad), Modern (Chandigarh, Navi Mumbai).",
            "<strong>Urban Agglomeration:</strong> A town and its adjoining urban outgrowths (OGs).",
            "<strong>Functional Towns:</strong> Administrative (Capital cities), Industrial (Jamshedpur), Transport (Kochi), Commercial (Kolkata).",
            "<strong>Smart Cities Mission:</strong> Aimed at core infrastructure and sustainable surroundings."
        ],
        pyqConcepts: [
            "Factors influencing <strong>Rural Settlement Patterns</strong> (Water, defense, relief).",
            "Classification of towns as per <strong>Census 2011</strong> (Statutory, Census, Outgrowths).",
            "Role of <strong>Satellite Towns</strong> in decentralizing major metropolitan clusters."
        ]
    },
    "c12-ie-5": {
        chapterId: "c12-ie-5",
        facts: [
            "<strong>Land Use:</strong> Categories include Forest, Net Sown Area, Current Fallow, and Waste Land.",
            "<strong>Cropping Seasons:</strong> Kharif (June-Oct), Rabi (Oct-March), Zaid (April-June).",
            "<strong>Major Grains:</strong> Rice (needs high temp/rain), Wheat (cool growing season), Millets (hardy crops).",
            "<strong>Commercial Crops:</strong> Cotton (Black soil), Jute (Golden fiber), Sugarcane (Agro-based).",
            "<strong>Green Revolution:</strong> Introduced in 1960s; used HYV seeds, fertilizers, and irrigation."
        ],
        pyqConcepts: [
            "Difference between <strong>Gross Cropped Area</strong> and Net Sown Area.",
            "Regional disparities caused by the Green Revolution (Punjab vs. rest of India).",
            "Agricultural problems: Small land holdings, over-reliance on monsoons, and soil degradation."
        ]
    },
    "c12-ie-6": {
        chapterId: "c12-ie-6",
        facts: [
            "<strong>Water Wealth:</strong> India has 4% of world's water but 17.5% of its population.",
            "<strong>Consumption:</strong> Agriculture uses over 90% of groundwater in states like Punjab/Haryana.",
            "<strong>Watershed Management:</strong> Programs like Haryali, Neeru-Meeru (AP), and Arvary Pani Sansad (Alwar).",
            "<strong>Rainwater Harvesting:</strong> Capturing runoff for groundwater recharge; mandatory in Tamil Nadu.",
            "<strong>National Water Policy (2012):</strong> Emphasizes water conservation and sustainable management."
        ],
        pyqConcepts: [
            "Depletion of <strong>Groundwater Aquifers</strong> in the NW Indian plains due to intensive irrigation.",
            "Inter-state water disputes (Cauvery, Krishna) as a major federal challenge.",
            "The impact of water pollution from industrial and domestic waste on river health."
        ]
    },
    "c12-ie-7": {
        chapterId: "c12-ie-7",
        facts: [
            "<strong>Metallic Minerals:</strong> Iron ore (Odisha/Karnataka), Manganese, Bauxite, Copper.",
            "<strong>Energy Minerals:</strong> Coal (80% Gondwana), Petroleum (Mumbai High, Assam), Natural Gas.",
            "<strong>Nuclear Energy:</strong> Uranium (Jarduguda, Jharkhand), Thorium (Monazite sands, Kerala).",
            "<strong>Renewable:</strong> Solar (Rajasthan/Gujarat), Wind (Tamil Nadu), Biomass.",
            "<strong>Mineral Belts:</strong> NE Plateau (Iron/Coal), SW Plateau (Goa/Karnataka), NW Region (Rajasthan)."
        ],
        pyqConcepts: [
            "Significance of the <strong>Gondwana Coal Fields</strong> located in the Damodar Valley.",
            "The transition towards non-conventional energy sources to meet climate goals.",
            "Geological distribution of minerals and their link to industrial clustering."
        ]
    },
    "c12-ie-8": {
        chapterId: "c12-ie-8",
        facts: [
            "<strong>Iron and Steel:</strong> TISCO (1907), IISCO, VISL; Public sector plants like Bhilai and Rourkela.",
            "<strong>Cotton Textiles:</strong> Oldest industry; Mumbai and Ahmedabad are primary hubs.",
            "<strong>Sugar Industry:</strong> Seasonal; shifting from North (UP) to South India (Maharashtra/TN).",
            "<strong>Petrochemicals:</strong> Primary centers include Vadodara, Mumbai, and Jamnagar.",
            "<strong>Knowledge-based:</strong> IT and electronics sector centered in Bengaluru (Silicon Valley of India)."
        ],
        pyqConcepts: [
            "Factors for the <strong>Locational Shift</strong> of sugar industry to Peninsular India (higher sucrose).",
            "Impact of Liberalization, Privatization, and Globalization (LPG) on Indian manufacturing.",
            "Industrial Regions: Chotanagpur (The Ruhr of India) and its resource base."
        ]
    },
    "c12-ie-9": {
        chapterId: "c12-ie-9",
        facts: [
            "<strong>Planning:</strong> Includes Sectoral (Focusing on specific sectors) and Regional (Reducing area imbalances).",
            "<strong>Target Area Programs:</strong> Hill Area Development, Drought Prone Area Program (DPAP).",
            "<strong>Sustainable Development:</strong> Needs that are met without compromising future generations (Brundtland Report).",
            "<strong>Indira Gandhi Canal:</strong> Transforming Rajasthan's desert through irrigation; impacts on biodiversity.",
            "<strong>ITDP:</strong> Integrated Tribal Development Project, focusing on tribal welfare in specific regions like Bharmaur."
        ],
        pyqConcepts: [
            "The concept of <strong>Multi-level Planning</strong> from Center down to the Panchayat level.",
            "Case study of <strong>Bharmaur</strong> tribal region and the impact of planned development.",
            "Balancing economic growth with ecological preservation in fragile ecosystems."
        ]
    },
    "c12-ie-10": {
        chapterId: "c12-ie-10",
        facts: [
            "<strong>Roads:</strong> Golden Quadrilateral (5,846 km); North-South & East-West Corridors; NHAI/BRO.",
            "<strong>Railways:</strong> Vast network; Konkan Railway connects Roha to Mangaluru (760 km).",
            "<strong>Waterways:</strong> NW-1 (Ganga), NW-2 (Brahmaputra), NW-3 (West Coast Canal).",
            "<strong>Air:</strong> Pawan Hans (Helicopter services); International and Domestic airports.",
            "<strong>Communication:</strong> Personal (Internet/Cellular) and Mass Media (Radio/TV/Satellites like INSAT)."
        ],
        pyqConcepts: [
            "<strong>Konkan Railway</strong> as an engineering marvel overcoming Western Ghats topography.",
            "The role of <strong>Satellite Communication</strong> (IRS/INSAT) in remote sensing and disaster management.",
            "Impact of the National Highways Development Project (NHDP) on internal trade."
        ]
    },
    "c12-ie-11": {
        chapterId: "c12-ie-11",
        facts: [
            "<strong>Trade History:</strong> Shift from exporting raw materials to manufactured goods and IT services.",
            "<strong>Balance of Trade:</strong> Difference between the value of exports and imports; usually a deficit in India.",
            "<strong>Ports:</strong> 12 Major and 200 Minor ports handle 95% of foreign trade by volume.",
            "<strong>Key Ports:</strong> Kandla (Tidal), Mumbai (Largest natural), Chennai (Artificial), Vishakhapatnam (Land-locked).",
            "<strong>SEZ:</strong> Special Economic Zones to boost manufacturing and exports."
        ],
        pyqConcepts: [
            "Changing <strong>Composition and Direction</strong> of India's foreign trade in the post-globalization era.",
            "Significance of a <strong>Hinterland</strong> in the developmental potential of a seaside port.",
            "Impact of Free Trade Agreements (FTAs) on the Indian domestic market."
        ]
    },
    "c12-ie-12": {
        chapterId: "c12-ie-12",
        facts: [
            "<strong>Pollution types:</strong> Air (Acid rain/Smog), Water (Industrial effluents), Noise, and Soil degradation.",
            "<strong>Urban Issues:</strong> Slum growth (Dharavi), solid waste management challenges, and overcrowding.",
            "<strong>Migration:</strong> Rural-to-urban flow creating environmental and social pressure in mega-cities.",
            "<strong>Land Degradation:</strong> Caused by salinity, alkalinity, and waterlogging in irrigated areas.",
            "<strong>Watershed Success:</strong> Jhabua district case study on tribal landscape transformation."
        ],
        pyqConcepts: [
            "<strong>Urban Sprawl</strong> and the conversion of agricultural land into residential suburbs.",
            "Link between <strong>Environment and Poverty</strong> in developing urban contexts.",
            "Sustainable solutions for <strong>Solid Waste Management</strong> in metro cities."
        ]
    },
    "c11-p-3": {
        chapterId: "c11-p-3",
        facts: [
            "<strong>Direct Sources:</strong> Mining, Drilling (Kola Superdeep), Volcanoes.",
            "<strong>Indirect Sources:</strong> Density, Temperature, Pressure shifts; Meteors; Gravity anomalies.",
            "<strong>Seismic Waves:</strong> Body waves (P and S) and Surface waves (L waves).",
            "<strong>P-waves:</strong> Fastest, longitudinal, pass through solid/liquid/gas. Longitudinal.",
            "<strong>S-waves:</strong> Transverse, pass ONLY through solids; reveal the liquid nature of outer core."
        ],
        pyqConcepts: [
            "Difference between <strong>P-wave and S-wave shadow zones</strong> (S-wave zone is much larger).",
            "The <strong>Asthenosphere</strong> as the upper mantle source for volcanic magma.",
            "Chemical layers: Crust (SiAl), Mantle (SiMa), Core (NiFe)."
        ]
    },
    "c11-p-4": {
        chapterId: "c11-p-4",
        facts: [
            "<strong>Continental Drift:</strong> Alfred Wegener (1912); Supercontinent Pangea and Ocean Panthalassa.",
            "<strong>Evidences:</strong> Jig-saw fit, Placers (gold in Ghana), Fossils (Mesosaurus), Glacial tillites.",
            "<strong>Plate Tectonics:</strong> McKenzie/Parker/Morgan (1967); 7 major and several minor plates.",
            "<strong>Boundaries:</strong> Divergent (Ridges), Convergent (Trenches/Mountains), Transform (Faults).",
            "<strong>Sea Floor Spreading:</strong> Theory by Harry Hess (1960) explaining rhythmic age increase from ridges."
        ],
        pyqConcepts: [
            "<strong>Convectional Current Theory:</strong> Arthur Holmes (1930s) as the driving force for plate movement.",
            "Collision of <strong>Indo-Australian Plate</strong> with Eurasian Plate forming the Himalayas.",
            "Distribution of volcanic activity along 'The Ring of Fire'."
        ]
    },
    "c11-p-5": {
        chapterId: "c11-p-5",
        facts: [
            "<strong>Minerals:</strong> Basic building blocks; Feldspar (most common) and Quartz.",
            "<strong>Igneous Rocks:</strong> 'Primary' rocks; Intrusive (Granite) and Extrusive (Basalt).",
            "<strong>Sedimentary:</strong> Formed via lithification; Clastic (Sandstone) or Organic (Limestone/Coal).",
            "<strong>Metamorphic:</strong> Formed under PVT (Pressure/Volume/Temp) changes; Gneiss, Slate, Schist.",
            "<strong>Rock Cycle:</strong> Continuous transformation of rocks over millions of years."
        ],
        pyqConcepts: [
            "Distinct properties of <strong>Basaltic and Granitic</strong> rocks in crustal composition.",
            "Significance of sedimentary rocks as archives of fossils and oil reserves.",
            "The process of <strong>Dynamic Metamorphism</strong> vs Thermal Metamorphism."
        ]
    },
    "c11-p-6": {
        chapterId: "c11-p-6",
        facts: [
            "<strong>Endogenic:</strong> Internal forces building land (Diastrophism, Vulcanism).",
            "<strong>Exogenic:</strong> External forces wearing down land (Denudation).",
            "<strong>Weathering:</strong> Physical (Mechanical), Chemical (Oxidation), and Biological.",
            "<strong>Mass Movement:</strong> Slow creep vs. rapid landslides/mudflows.",
            "<strong>Soil Formation:</strong> Influenced by parent material, climate, relief, and time."
        ],
        pyqConcepts: [
            "Concept of <strong>Exfoliation</strong> (Onion peeling) in arid regions.",
            "Relationship between climate and the rate of chemical weathering.",
            "The role of geomorphic agents like running water and wind in shaping landscapes."
        ]
    },
    "c11-p-7": {
        chapterId: "c11-p-7",
        facts: [
            "<strong>Geomorphic Agents:</strong> Water, Wind, Glaciers, Waves, and Groundwater.",
            "<strong>Fluvial Landforms:</strong> V-shaped valleys, Gorges (Erosional); Deltas, Alluvial fans (Depositional).",
            "<strong>Karst (Groundwater):</strong> Sinkholes, Lapies, Stalactites, and Stalagmites.",
            "<strong>Glacial:</strong> Cirques, Horns, Moraines (Eskers, Drumlins).",
            "<strong>Arid (Wind):</strong> Pediments, Mushroom rocks, Barchans (Crescent dunes)."
        ],
        pyqConcepts: [
            "The <strong>cycle of erosion</strong> and the evolution of landscapes through youth, mature, and old stages.",
            "Distinctive features of <strong>Meanders and Ox-bow lakes</strong> formation.",
            "Conditions necessary for the development of Karst topography (limestone beds)."
        ]
    },
    "c11-p-8": {
        chapterId: "c11-p-8",
        facts: [
            "<strong>Composition:</strong> Nitrogen (78%), Oxygen (21%), Argon (0.93%), CO2 (0.03%).",
            "<strong>Layers:</strong> Troposphere, Stratosphere, Mesosphere, Thermosphere (Ionosphere), Exosphere.",
            "<strong>Troposphere:</strong> Contains 80% of mass; all weather occurs here. Temp falls with height.",
            "<strong>Stratosphere:</strong> Home to the <strong>Ozone Layer</strong>; ideal for jet flying.",
            "<strong>Ionosphere:</strong> Reflects radio waves back to earth, enabling wireless communication."
        ],
        pyqConcepts: [
            "Significance of <strong>Aerosols and Dust</strong> in acting as hygroscopic nuclei for cloud formation.",
            "Variation of <strong>Water Vapor</strong> with latitude and altitude.",
            "Impact of the Ozone layer on protecting life from UV-B radiation."
        ]
    },
    "c11-p-9": {
        chapterId: "c11-p-9",
        facts: [
            "<strong>Insolation:</strong> Incoming solar radiation; maximum at sub-tropics, minimum at poles.",
            "<strong>Heat Budget:</strong> Total incoming energy equals outgoing radiation (Albedo is ~35%).",
            "<strong>Transfer:</strong> Conduction (direct contact), Convection (fluids), Advection (horizontal air).",
            "<strong>Factors:</strong> Latitude, Altitude, Land/Water contrast, Ocean currents.",
            "<strong>Inversion:</strong> Temperature increases with altitude; common in mountain valleys."
        ],
        pyqConcepts: [
            "The concept of <strong>Global Heat Engine</strong> and energy transfer from surplus (tropics) to deficit (poles).",
            "Influence of <strong>Specific Heat</strong> differences between land and water on coastal climates.",
            "Conditions favoring <strong>Temperature Inversion</strong> and its effect on fog formation."
        ]
    },
    "c11-p-10": {
        chapterId: "c11-p-10",
        facts: [
            "<strong>Atmospheric Pressure:</strong> Force exerted by air weight; measured in mb/hPa.",
            "<strong>Winds:</strong> Caused by pressure gradient, Coriolis force, and friction.",
            "<strong>Global Winds:</strong> Trade winds, Westerlies, Polar Easterlies. ITCZ is the convergence zone.",
            "<strong>Cyclone:</strong> Low pressure center; Anti-clockwise in NH, Clockwise in SH.",
            "<strong>Local Winds:</strong> Loo (India), Chinook (Snow-eater, USA), Foehn (Alps)."
        ],
        pyqConcepts: [
            "Mechanism of <strong>Coriolis Force</strong> and its dependence on latitude (Zero at equator).",
            "Life cycle of a <strong>Extra-tropical (Temperate) Cyclone</strong> vs. Tropical Cyclone.",
            "Seasonal migration of pressure belts and its link to the Indian Monsoon."
        ]
    },
    "c11-p-11": {
        chapterId: "c11-p-11",
        facts: [
            "<strong>Humidity:</strong> Absolute (actual weight), Relative (%), Specific (weight per unit mass of air).",
            "<strong>Condensation:</strong> Occurs when air cools below dew point (Dew, Frost, Fog, Mist).",
            "<strong>Clouds:</strong> Cirrus (High), Cumulus (Woolly), Stratus (Layers), Nimbus (Rain-bearing).",
            "<strong>Rainfall Types:</strong> Convectional (Tropics), Orographic (Mountains), Cyclonic (Frontal).",
            "<strong>Saturation:</strong> Air's capacity to hold water increases with temperature."
        ],
        pyqConcepts: [
            "Why <strong>Relative Humidity</strong> changes with temperature even if absolute humidity stays constant.",
            "Conditions for <strong>Orographic Rainfall</strong> and the'Rainshadow Area' effect.",
            "Difference between <strong>Fog and Mist</strong> (Mist contains more water droplets/less visibility)."
        ]
    },
    "c11-p-12": {
        chapterId: "c11-p-12",
        facts: [
            "<strong>Koeppen's System:</strong> Uses letters (A, B, C, D, E, H) based on temp and precipitation.",
            "<strong>Groups:</strong> A (Tropical), B (Dry), C (Warm Temp), D (Cold Temp), E (Polar).",
            "<strong>Climate Change:</strong> Evidence from ice cores, tree rings, and historical shifts.",
            "<strong>Global Warming:</strong> Caused by Greenhouse Gases (CO2, Methane, CFCs).",
            "<strong>Kyoto Protocol:</strong> International treaty to reduce greenhouse gas emissions."
        ],
        pyqConcepts: [
            "Application of <strong>Koeppen's Classification</strong> to India's climate regions (e.g., Amw, BWhw).",
            "Natural vs. Anthropogenic causes of climate change.",
            "Impact of melting glaciers on permafrost and sea-level rise."
        ]
    },
    "c11-p-13": {
        chapterId: "c11-p-13",
        facts: [
            "<strong>Ocean Basin:</strong> Continental Shelf, Slope, Deep Sea Plain (Abyssal), Trenches.",
            "<strong>Continental Shelf:</strong> Shallow (200m), rich in minerals, fossil fuels, and fish.",
            "<strong>Trenches:</strong> Deepest parts; Mariana Trench (11,034m) in the Pacific.",
            "<strong>Salinity:</strong> Average 35 PPT; highest in Red Sea and Dead Sea due to evaporation.",
            "<strong>Temperature:</strong> Decreases with depth; Thermocline is the layer of rapid decline."
        ],
        pyqConcepts: [
            "Economic significance of the <strong>Continental Shelf</strong> for global oil and gas production.",
            "Factors affecting <strong>Surface Salinity</strong> (Evaporation, Precipitation, River Influx).",
            "Distribution of oceanic ridges and trenches along plate boundaries."
        ]
    },
    "c11-p-14": {
        chapterId: "c11-p-14",
        facts: [
            "<strong>Waves:</strong> Energy traveling through water; size depends on wind speed/duration.",
            "<strong>Tides:</strong> Periodic rise/fall of sea level; Spring (highest) and Neap (lowest).",
            "<strong>Ocean Currents:</strong> Driven by wind, gravity, Coriolis, and density.",
            "<strong>Major Currents:</strong> Gulf Stream (Warm), Kuroshio (Warm), Labrador (Cold), Oyashio (Cold).",
            "<strong>El Nino:</strong> Periodic warming of Pacific waters, disrupting global weather."
        ],
        pyqConcepts: [
            "Formation of <strong>Spring and Neap Tides</strong> based on Sun-Moon-Earth alignment.",
            "Factors determining <strong>Ocean Circulation</strong> (Temp, Salinity, Rotation).",
            "Meetings of warm and cold currents as prime fishing grounds due to plankton growth."
        ]
    },
    "c11-p-15": {
        chapterId: "c11-p-15",
        facts: [
            "<strong>Biosphere:</strong> Zone of life; includes all abiotic and biotic components.",
            "<strong>Ecosystem:</strong> Functional unit of nature; producers, consumers, and decomposers.",
            "<strong>Biomes:</strong> Classified by climate and vegetation (Rainforests, Deserts, Tundra).",
            "<strong>Cycles:</strong> Biogeochemical cycles including Carbon, Oxygen, and Nitrogen.",
            "<strong>Succession:</strong> Process where biological communities evolve over time."
        ],
        pyqConcepts: [
            "Efficiency of <strong>Energy Flow</strong> in a food chain (The 10% Rule).",
            "Importance of <strong>Biogeochemical Cycles</strong> in maintaining ecological balance.",
            "Functioning of the Nitrogen cycle: Fixation, Nitrification, and Denitrification."
        ]
    },
    "c11-p-16": {
        chapterId: "c11-p-16",
        facts: [
            "<strong>Levels:</strong> Genetic, Species, and Ecosystem diversity.",
            "<strong>Hotspots:</strong> Regions with high endemism under threat (e.g., Western Ghats).",
            "<strong>Conservation:</strong> In-situ (National Parks, Reserves) and Ex-situ (Zoos, Seed banks).",
            "<strong>IUCN Red List:</strong> Categorizes species like Endangered and Vulnerable.",
            "<strong>Threats:</strong> Habitat loss, Invasive species, and Climate Change."
        ],
        pyqConcepts: [
            "Identification of <strong>Biodiversity Hotspots in India</strong> (Himalayas, Indo-Burma, Western Ghats).",
            "Difference between <strong>In-situ and Ex-situ</strong> strategies for endangered species.",
            "Human impact (Anthropocene) on accelerating the rate of species extinction."
        ]
    }
};
