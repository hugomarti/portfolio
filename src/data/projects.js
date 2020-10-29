import StemHatchLogo from "../assets/stemHatchLogo.svg";
import LupasDeSolLogo from "../assets/lupasDeSolLogo.svg";
import MovieDatabaseLogo from "../assets/movieDatabaseLogo.svg";
import BitLogo from "../assets/8bitLogo.svg";

import ProjectImage1 from "../assets/projectImage1.png";
import ProjectImage2 from "../assets/projectImage2.png";
import ProjectImage3 from "../assets/projectImage3.png";
import ProjectImage4 from "../assets/projectImage4.png";

export const cards = [
  {
    id: 1,
    title: "Digital Music Store",
    logo: StemHatchLogo,
    route: "project/stemHatch",
  },
  {
    id: 2,
    title: "Sunglasses eComerce",
    logo: LupasDeSolLogo,
    route: "project/lupasDeSol",
  },

  {
    id: 3,
    title: "Movie Database",
    logo: MovieDatabaseLogo,
    route: "project/movieDatabase",
  },
  {
    id: 4,
    title: "Game Items Store",
    logo: BitLogo,
    route: "project/eightBit",
  },
];

export const projectPages = {
  stemHatch: {
    bgImage: ProjectImage1,
    logo: StemHatchLogo,
    type: "Digital Music Store",
    title: ".stemHatch",
    description:
      "Personal project focused on selling digital music online, where music producers can sell their music rights to DJs and content creators. Made with React, Redux and styling with Chakra UI.",
  },
  lupasDeSol: {
    bgImage: ProjectImage2,
    logo: LupasDeSolLogo,
    type: "Sunglasses eCormerce",
    title: ".lupasDeSol",
    description:
      "Sunglasses eComerce simulation. Products are oganized by genres and glasses collection, all the database and authorization is handled by firebase and stripe for payments. Made with React, Redux and styling with Grommet UI.",
  },
  movieDatabase: {
    bgImage: ProjectImage3,
    logo: MovieDatabaseLogo,
    type: "Movie Database",
    title: ".movieDatabase",
    description:
      "Movie Database using TMBD API, movies can be searched, filter by genres, play trailers etc... Made with React, Redux and styled with Grommet UI.",
  },
  eightBit: {
    bgImage: ProjectImage4,
    logo: BitLogo,
    type: "Game Items Store",
    title: "8Bit",
    description:
      "Game eComerce simulation, where you can add produscts to cart and update them. Created with React, Redux and Chakra UI.",
  },
};
