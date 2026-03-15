import { GeoFeature } from './geo-types';

export const RAMSAR_SITES_DATA: GeoFeature[] = [
  {
    id: 'ramsar-chilika',
    name: 'Chilika Lake',
    type: 'ramsar-site',
    coordinates: { lat: 19.6801, lng: 85.3247 },
    region: 'Odisha',
    description: 'The largest coastal lagoon in India and the second largest brackish water lagoon in the world.',
    characteristics: [
      'First Indian wetland of international importance under the Ramsar Convention (1981).',
      'Home to the Irrawaddy dolphin (Endangered).',
      'Major wintering ground for migratory birds from as far as Siberia.'
    ],
    upsc_relevance: 'Often tested on Montreux Record (it was removed from it in 2002), Irrawaddy dolphins, and migratory routes.',
    pyq_years: [2014, 2011, 2020],
    difficulty: 'high-yield',
    images: ['https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=2070&auto=format&fit=crop']
  },
  {
    id: 'ramsar-keoladeo',
    name: 'Keoladeo Ghana National Park',
    type: 'ramsar-site',
    coordinates: { lat: 27.1592, lng: 77.5225 },
    region: 'Rajasthan',
    description: 'A man-made and man-managed wetland and one of the world\'s most important bird breeding and feeding grounds.',
    characteristics: [
      'UNESCO World Heritage Site.',
      'Currently on the Montreux Record due to water shortage and invasive species (Prosopis juliflora).',
      'Strategic location in the Central Asian Flyway.'
    ],
    upsc_relevance: 'Montreux Record status is a frequent UPSC trap. Water supply comes from Ajan Dam.',
    pyq_years: [2010, 2015, 2018],
    difficulty: 'high-yield',
    images: ['https://images.unsplash.com/photo-1623945410151-5a468757099d?q=80&w=2070&auto=format&fit=crop']
  },
  {
    id: 'ramsar-loktak',
    name: 'Loktak Lake',
    type: 'ramsar-site',
    coordinates: { lat: 24.5501, lng: 93.7667 },
    region: 'Manipur',
    description: 'The largest freshwater lake in Northeast India, famous for the phumdis (heterogeneous mass of vegetation, soil, and organic matter) floating over it.',
    characteristics: [
      'Keibul Lamjao National Park (the world\'s only floating national park) is located here.',
      'Last natural refuge of the endangered Sangai (Dancing Deer).',
      'Currently on the Montreux Record.'
    ],
    upsc_relevance: 'Sangai deer and Phumdis are extremely high-yield keywords.',
    pyq_years: [2015, 2017, 2021],
    difficulty: 'high-yield'
  },
  {
    id: 'ramsar-haiderpur',
    name: 'Haiderpur Wetland',
    type: 'ramsar-site',
    coordinates: { lat: 29.4168, lng: 78.0008 },
    region: 'Uttar Pradesh',
    description: 'A human-made wetland formed in 1984 by the construction of the Madhya Ganga Barrage.',
    characteristics: [
      'Designated as India\'s 47th Ramsar site in 2021.',
      'Important stopover for migratory birds in the Upper Ganga region.',
      'Boundary of Hastinapur Wildlife Sanctuary.'
    ],
    upsc_relevance: 'Significant as a relatively new addition in a high-density area.',
    pyq_years: [],
    difficulty: 'medium'
  },
  {
    id: 'ramsar-pichavaram',
    name: 'Pichavaram Mangrove',
    type: 'ramsar-site',
    coordinates: { lat: 11.4283, lng: 79.7811 },
    region: 'Tamil Nadu',
    description: 'One of the largest mangrove forests in India, separated from the Bay of Bengal by a sand bar.',
    characteristics: [
      'Added in 2022.',
      'Unique ecosystem with numerous island-like patches covered with mangroves.',
      'Vital for coastal protection against tsunamis and storm surges.'
    ],
    upsc_relevance: 'Bio-shield properties of mangroves are frequently tested.',
    pyq_years: [2022],
    difficulty: 'high-yield'
  },
  {
    id: 'ramsar-tsokar',
    name: 'Tso Kar Wetland Complex',
    type: 'ramsar-site',
    coordinates: { lat: 33.3167, lng: 78.0000 },
    region: 'Ladakh',
    description: 'A high-altitude wetland complex consisting of two principal waterbodies: Startsapuk Tso (freshwater) and Tso Kar (hypersaline).',
    characteristics: [
      'Important breeding ground for the Black-necked Crane.',
      'Highest Ramsar site in India.',
      'Essential for the livelihoods of the Changpa nomadic communities.'
    ],
    upsc_relevance: 'High-altitude wetlands and Black-necked crane are favorite UPSC themes.',
    pyq_years: [2021],
    difficulty: 'high-yield'
  },
  {
    id: 'ramsar-pallikaranai',
    name: 'Pallikaranai Marsh Reserve Forest',
    type: 'ramsar-site',
    coordinates: { lat: 12.9347, lng: 80.2214 },
    region: 'Tamil Nadu',
    description: 'One of the few remaining natural wetlands in Chennai, serving as a vital urban sponge.',
    characteristics: [
      'Designated in 2022.',
      'Critical for flood mitigation in Chennai.',
      'Home to several endemic and endangered species.'
    ],
    upsc_relevance: 'Urban wetland importance and flood management connection.',
    pyq_years: [2023],
    difficulty: 'medium'
  },
  {
    id: 'ramsar-bhoj',
    name: 'Bhoj Wetland',
    type: 'ramsar-site',
    coordinates: { lat: 23.2392, lng: 77.3467 },
    region: 'Madhya Pradesh',
    description: 'Comprises two lakes (Upper and Lower) that are the primary source of water for Bhopal.',
    characteristics: [
      'Man-made reservoir dating back to the 11th century (built by Raja Bhoj).',
      'Supports a large population of Sarus Cranes.'
    ],
    upsc_relevance: 'Historical context combined with biological importance.',
    pyq_years: [2012],
    difficulty: 'medium'
  },
  {
    id: 'ramsar-chhari-dhand',
    name: 'Chhari-Dhand Conservation Reserve',
    type: 'ramsar-site',
    coordinates: { lat: 23.4912, lng: 69.3145 },
    region: 'Gujarat',
    description: 'A seasonal saline wetland in the Kutch district, drawing thousands of migratory flamingos.',
    characteristics: [
      'Designated in Jan 2026 (One of the newest).',
      'Located on the edge of the Banni grasslands.',
      'Vital staging ground for the Common Crane and Greater Flamingo.'
    ],
    upsc_relevance: 'Crucial for 2026 examination as a "Current Affairs" addition.',
    pyq_years: [],
    difficulty: 'high-yield',
    in_news_24m: true,
    news_context: 'Designated as India\'s newest Ramsar site in early 2026 to protect the Banni grassland ecosystem.'
  },
  {
    id: 'ramsar-patna',
    name: 'Patna Bird Sanctuary',
    type: 'ramsar-site',
    coordinates: { lat: 27.5181, lng: 78.2806 },
    region: 'Uttar Pradesh',
    description: 'A fresh-water wetland and the smallest bird sanctuary in UP.',
    characteristics: [
      'Added to Ramsar list in Jan 2026.',
      'Dense cover of date palms and aquatic vegetation.',
      'Major hub for Pied Myna and other resident birds.'
    ],
    upsc_relevance: 'Newly added in 2026; high probability of inclusion in pairing-based questions.',
    pyq_years: [],
    difficulty: 'high-yield',
    in_news_24m: true,
    news_context: 'Designated as a Ramsar site in January 2026.'
  },
  {
    id: 'ramsar-sambhar',
    name: 'Sambhar Lake',
    type: 'ramsar-site',
    coordinates: { lat: 26.9634, lng: 75.2016 },
    region: 'Rajasthan',
    description: 'India\'s largest inland salt lake.',
    characteristics: [
      'Produces a significant percentage of India\'s salt.',
      'Suffered high avian botulism mortality in 2019.',
      'Fed by several rivers including Mandha, Runpangarh, Khandel, and Ariyan.'
    ],
    upsc_relevance: 'Salt lake ecology and avian botulism event (2019-20).',
    pyq_years: [2013, 2020],
    difficulty: 'high-yield'
  },
  {
    id: 'ramsar-asiliserh',
    name: 'Siliserh Lake',
    type: 'ramsar-site',
    coordinates: { lat: 27.5308, lng: 76.5292 },
    region: 'Rajasthan',
    description: 'A man-made lake built by Maharaja Vinay Singh in 1845 for the people of Alwar.',
    characteristics: [
      'Designated in Dec 2025.',
      'Surrounded by the Aravalli hills.',
      'Important source of water and tourist hub in Eastern Rajasthan.'
    ],
    upsc_relevance: 'Latest addition from Rajasthan (Late 2025).',
    pyq_years: [],
    difficulty: 'medium',
    in_news_24m: true,
    news_context: 'Added to the Ramsar list in December 2025.'
  },
  {
    id: 'ramsar-kopra',
    name: 'Kopra Jalashay',
    type: 'ramsar-site',
    coordinates: { lat: 22.0801, lng: 82.1501 },
    region: 'Chhattisgarh',
    description: 'Chhattisgarh\'s first Ramsar site, an important reservoir supporting biodiversity.',
    characteristics: [
      'Designated in Dec 2025.',
      'Vital for the irrigation and eco-balance of the Bilaspur region.',
      'Home to over 100 species of resident and migratory birds.'
    ],
    upsc_relevance: 'First site from Chhattisgarh; extremely high yield for "Firsts" category.',
    pyq_years: [],
    difficulty: 'high-yield',
    in_news_24m: true,
    news_context: 'Became Chhattisgarh\'s inaugural Ramsar site in December 2025.'
  },
  {
    id: 'ramsar-vembanad',
    name: 'Vembanad-Kol Wetland',
    type: 'ramsar-site',
    coordinates: { lat: 9.5833, lng: 76.4167 },
    region: 'Kerala',
    description: 'The longest lake in India and the largest in Kerala.',
    characteristics: [
      'Known for the Thanneermukkom Bund (saltwater barrier).',
      'Host to the famous Nehru Trophy Boat Race.',
      'Located at the heart of the Kerala Backwaters.'
    ],
    upsc_relevance: 'Saltwater barriers and backwater ecology.',
    pyq_years: [2015, 2022],
    difficulty: 'high-yield'
  }
];
