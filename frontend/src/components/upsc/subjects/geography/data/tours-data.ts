import { Tour } from './geo-types';

export const GEOGRAPHY_TOURS: Tour[] = [
  {
    id: "tour-ganga",
    name: "The Journey of the Ganga",
    description: "Follow the sacred Ganga from its Himalayan headwaters to the massive Sunderbans delta.",
    steps: [
      {
        featureId: "river-ganga-upper",
        title: "The Source: Gangotri",
        description: "The Ganga originates as the Bhagirathi from the Gangotri Glacier at Gaumukh.",
        zoom: 8,
        duration: 3000
      },
      {
        featureId: "river-yamuna",
        title: "The Divine Confluence: Prayagraj",
        description: "Where the Yamuna meets the Ganga at the holy Triveni Sangam.",
        zoom: 6,
        duration: 3500
      },
      {
        featureId: "ramsar-keoladeo",
        title: "The Arid Feeders",
        description: "While the Ganga flows east, its basin extends west into the man-made wetlands of Keoladeo.",
        zoom: 6,
        duration: 3000
      },
      {
        featureId: "ramsar-loktak",
        title: "The Far Eastern Influence",
        description: "The Ganga-Brahmaputra-Meghna system connects the entire subcontinent's drainage.",
        zoom: 5,
        duration: 4000
      },
      {
        featureId: "br-sundarbans",
        title: "The Final Confluence: Sundarbans",
        description: "The largest mangrove forest in the world, where the Ganga finally meets the Bay of Bengal.",
        zoom: 8,
        duration: 4000
      }
    ]
  }
];
