import lumenara from "../assets/lumenara.png";
import theronix from "../assets/theronix.png";
import orionis from "../assets/orionis.png";
import etheron from "../assets/etheron.png";

export const PLANETS = [
  {
    id: 0,
    name: "LUMENARA",
    galaxy: "Andromeda-IV",
    diameter: "11,540 km",
    day: "56 Earth hours",
    temperature: "10°C to 30°C",
    climate: "Tropical",
    image: lumenara,
    gradient: "linear-gradient(90deg, #21273C 0%, #0F1420 100%)",
  },
  {
    id: 1,
    name: "THERONIX",
    galaxy: "Sombrero",
    diameter: "56,780 km",
    day: "12 Earth hours",
    temperature: "60°C to 90°C",
    climate: "Tropical",
    image: theronix,
    gradient:"linear-gradient(90deg, #19283D 0%, #0B1420 100%)",

  },
  {
    id: 2,
    name: "ORIONIS",
    galaxy: "Virgo A",
    diameter: "120,780 km",
    day: "4 Earth hours",
    temperature: "10°C to 40°C",
    climate: "Temperate",
    image: orionis,
       gradient: "linear-gradient(90deg, #1B2846 0%, #0A1020 100%)",

  },
  {
    id: 3,
    name: "ETHERON",
    galaxy: "Andromeda-IV",
    diameter: "16,400 km",
    day: "26 Earth hours",
    temperature: "-20°C to 0°C",
    climate: "Polar",
    image: etheron,
    gradient: "linear-gradient(90deg, #202649 0%, #0A1020 100%)",

  },
];
