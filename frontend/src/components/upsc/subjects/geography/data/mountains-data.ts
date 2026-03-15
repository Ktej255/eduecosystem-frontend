import { GeoFeature } from './geo-types';

export const MOUNTAINS_DATA: GeoFeature[] = [
  // MOUNTAIN RANGES (Polylines)
  {
    id: 'range-aravalli',
    name: 'Aravalli Range',
    type: 'mountain-range',
    coordinates: { lat: 26.0, lng: 74.0 }, // Central point for label
    region: 'Rajasthan',
    description: 'One of the oldest fold mountain systems in the world, now eroded into residual mountains.',
    characteristics: [
      'Aligment: South-West (Gujarat) to North-East (Delhi).',
      'Acts as a barrier against the expansion of the Thar Desert.',
      'Sources rivers like Banas, Luni, and Sabarmati.'
    ],
    upsc_relevance: 'Tested on directional alignment, blockage of monsoon winds, and mining issues.',
    pyq_years: [2013, 2017, 2021],
    difficulty: 'high-yield',
    path: [
      [71.5, 23.5], // NE Gujarat
      [73.5, 25.0], // Udaipur
      [74.5, 26.5], // Ajmer
      [75.8, 27.8], // Alwar
      [77.1, 28.6]  // Delhi
    ]
  },
  {
    id: 'range-western-ghats',
    name: 'Western Ghats (Sahyadris)',
    type: 'mountain-range',
    coordinates: { lat: 14.0, lng: 74.5 },
    region: 'Western India',
    description: 'An escarpment that runs parallel to the western coast of the Indian peninsula.',
    characteristics: [
      'Older than the Himalayas; a Global Biodiversity Hotspot.',
      'Continuous range with few passes (Thal Ghat, Bhor Ghat, Palghat).',
      'Origin of major east-flowing peninsular rivers (Godavari, Krishna, Kaveri).'
    ],
    upsc_relevance: 'UPSC favorite for biodiversity, Gadgil/Kasturirangan reports, and orographic rainfall.',
    pyq_years: [2011, 2015, 2018, 2022],
    difficulty: 'high-yield',
    path: [
      [73.7, 21.0], // Tapti mouth
      [73.8, 19.0], // Near Mumbai
      [74.0, 16.0], // Goa
      [75.0, 13.0], // Karnataka
      [76.5, 10.0], // Kerala (Anaimalai)
      [77.2, 8.5]   // Kanyakumari
    ]
  },
  {
    id: 'range-greater-himalayas',
    name: 'Greater Himalayas (Himadri)',
    type: 'mountain-range',
    coordinates: { lat: 31.0, lng: 80.0 },
    region: 'Northern India',
    description: 'The highest and innermost range of the Himalayan mountain system.',
    characteristics: [
      'Contains the world\'s highest peaks (Mt. Everest, Kanchenjunga).',
      'Composed mainly of central crystallines (granites and gneisses).',
      'Source of the largest glaciers in India (Gangotri, Yamunotri).'
    ],
    upsc_relevance: 'Structural geology and sequence of ranges (N to S).',
    pyq_years: [2012, 2016, 2020],
    difficulty: 'high-yield',
    path: [
      [74.0, 35.0], // Nanga Parbat area
      [77.0, 33.0], // Ladakh/HP
      [80.0, 30.5], // Uttarakhand
      [88.0, 27.5], // Sikkim
      [95.0, 28.5]  // Namcha Barwa
    ]
  },
  {
    id: 'range-vindhyas',
    name: 'Vindhya Range',
    type: 'mountain-range',
    coordinates: { lat: 24.5, lng: 78.0 },
    region: 'Central India',
    description: 'A complex, discontinuous chain of mountain ridges, hill ranges, highlands and plateau escarpments.',
    characteristics: [
      'Traditional boundary between North and South India.',
      'Mainly composed of sedimentary rocks (sandstones).',
      'Northern boundary of the Narmada Rift Valley.'
    ],
    upsc_relevance: 'Rift valley dynamics and water divide between Ganga and Peninsular systems.',
    pyq_years: [2014, 2019],
    difficulty: 'medium',
    path: [
      [74.0, 22.5], // Gujarat border
      [77.0, 23.5], // Bhopal
      [80.0, 24.5], // Panna
      [83.0, 25.0]  // Kaimur
    ]
  },

  // PEAKS (Point Markers)
  {
    id: 'peak-kanchenjunga',
    name: 'Kanchenjunga',
    type: 'peak',
    coordinates: { lat: 27.7025, lng: 88.1475 },
    region: 'Sikkim',
    description: 'The third highest mountain in the world and the second highest in India.',
    characteristics: [
      'Located on the border between Nepal and Sikkim.',
      'Sikkim\'s guardian deity.',
      'Sacred to both Hindus and Buddhists.'
    ],
    upsc_relevance: 'Highest peak in UNDISPUTED Indian territory.',
    pyq_years: [2014],
    difficulty: 'high-yield'
  },
  {
    id: 'peak-anamudi',
    name: 'Anamudi',
    type: 'peak',
    coordinates: { lat: 10.1667, lng: 77.0667 },
    region: 'Kerala',
    description: 'The highest peak in the Western Ghats and South India.',
    characteristics: [
      'Known as the "Everest of South India".',
      'Located within the Eravikulam National Park.',
      'Junction of Anaimalai, Palani, and Cardamom hills.'
    ],
    upsc_relevance: 'Frequently tested in "Highest in X" pairing questions.',
    pyq_years: [2011, 2018],
    difficulty: 'high-yield'
  },
  {
    id: 'peak-guru-shikhar',
    name: 'Guru Shikhar',
    type: 'peak',
    coordinates: { lat: 24.6492, lng: 72.7758 },
    region: 'Rajasthan',
    description: 'The highest point in the Aravalli Range and the state of Rajasthan.',
    characteristics: [
      'Located in Mount Abu.',
      'Named after the sage Dattatreya.',
      'Home to several temples and an observatory.'
    ],
    upsc_relevance: 'Highest peak of the Aravallis.',
    pyq_years: [2015],
    difficulty: 'medium'
  },
  {
    id: 'peak-nanda-devi',
    name: 'Nanda Devi',
    type: 'peak',
    coordinates: { lat: 30.3753, lng: 79.9703 },
    region: 'Uttarakhand',
    description: 'The second highest mountain in India and the highest entirely within the country\'s borders.',
    characteristics: [
      'Surrounded by a high-altitude ring of peaks called the Nanda Devi Sanctuary.',
      'UNESCO World Heritage Site.',
      'Core of the Nanda Devi Biosphere Reserve.'
    ],
    upsc_relevance: 'Strictly protected biosphere reserve status.',
    pyq_years: [2013, 2021],
    difficulty: 'high-yield'
  }
];
