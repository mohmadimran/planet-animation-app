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
    gradient:
      "linear-gradient(90.64deg, rgba(255, 153, 0, 0.1) 3.06%, rgba(255, 203, 18, 0.1) 70.17%, rgba(146, 27, 188, 0.1) 75.86%)",
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
    gradient:
      "linear-gradient(90.64deg, rgba(255, 153, 0, 0.1) 3.06%, rgba(5, 67, 37, 0.1) 3.06%, rgba(5, 67, 26, 0.1) 70.17%)",
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
    gradient:
      "linear-gradient(90.64deg, rgba(5, 37, 67, 0.1) 3.06%, rgba(9, 66, 133, 0.1) 70.17%)",
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
    gradient:
      "linear-gradient(90.64deg, rgba(82, 0, 255, 0.1) 3.06%, rgba(146, 27, 188, 0.1) 75.86%)",
  },
];
