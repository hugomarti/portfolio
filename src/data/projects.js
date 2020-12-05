import StemHatchLogo2 from "../assets/stemHatchLogo2.svg";
import LupasDeSolLogo2 from "../assets/lupasDeSolLogo2.svg";
import MovieDatabaseLogo2 from "../assets/movieDatabaseLogo2.svg";
import BitLogo2 from "../assets/8bitLogo2.svg";
import Project1BgImage from "../assets/projectImage1.png";
import Project2BgImage from "../assets/projectImage2.png";
import Project3BgImage from "../assets/projectImage3.png";
import Project4BgImage from "../assets/projectImage4.png";
import MockupStem from "../assets/mockup-stem.jpg";
import MockupLupas from "../assets/mockup-lupas.jpg";
import MockupMovie from "../assets/mockup-movie.jpg";
import MockupRpg from "../assets/mockup-rpg.jpg";

export const cards = [
  {
    id: 1,
    title: "Digital Music Store",
    logo: StemHatchLogo2,
    route: "project/stemHatch",
  },
  {
    id: 2,
    title: "Sunglasses eComerce",
    logo: LupasDeSolLogo2,
    route: "project/lupasDeSol",
  },

  {
    id: 3,
    title: "Movie Database",
    logo: MovieDatabaseLogo2,
    route: "project/movieDatabase",
    link: "",
  },
  {
    id: 4,
    title: "Game Items Store",
    logo: BitLogo2,
    route: "project/eightBit",
    link: "",
  },
];

export const projectPages = {
  stemHatch: {
    bgImage: Project1BgImage,
    mockup: MockupStem,
    type: "Digital Music Store",
    title: ".stemHatch",
    description:
      "Stem Hatch is a personal project currently under development, focused on selling music online, where music producers can sell their music copy rights to DJs and content creators. Made with React, Redux, styled with Chakra UI and a previous UI and graphic design made with Figma and Illustrator",
    link: "https://adoring-shaw-3dd89a.netlify.app",
    sourceCode: "https://github.com/hugomarti/stem-hatch-2",
    disableButton: true,
  },
  lupasDeSol: {
    bgImage: Project2BgImage,
    mockup: MockupLupas,
    type: "Sunglasses eCormerce",
    title: ".lupasDeSol",
    description:
      "Sunglasses eCommerce simulation. Products are organized by genres and collections, all the database and authorization is handled by Firebase and Stripe for payments. Made with React, Redux, styled with Grommet UI and a previous UI and graphic design made with Figma and Illustrator.",
    link: "https://lupas-de-sol.web.app/",
    sourceCode: "https://github.com/hugomarti/lupas-de-sol",
    disableButton: false,
  },
  movieDatabase: {
    bgImage: Project3BgImage,
    mockup: MockupMovie,
    type: "Movie Database",
    title: ".movieDatabase",
    description:
      "Movie Database using TMBD API, I included features like search movies, filter by genres, play trailers etc... Made with React, Redux, Axios and styled with Grommet UI.Sunglasses eCommerce simulation. Products are organized by genres and collections, all the database and authorization is handled by Firebase and Stripe for payments. Made with React, Redux, styled with Grommet UI and a previous UI and graphic design made with Figma and Illustrator.",
    link: "https://5f9c00fae996fa096347eccb--popcorn-movie.netlify.app/",
    sourceCode: "https://github.com/hugomarti/popcorn-db",
    disableButton: false,
  },
  eightBit: {
    bgImage: Project4BgImage,
    mockup: MockupRpg,
    type: "Game Items Store",
    title: "8Bit",
    description:
      "Game eCommerce simulation, where you can add and delete products in the cart. Made with React, Redux, and Chakra UI.",
    link: "https://5f9c005a668f071cbccc7837--8bit-store.netlify.app/",
    sourceCode: "https://github.com/hugomarti/8bit-ecomerce",
    disableButton: false,
  },
};

export const skillsData = [
  {
    id: 1,
    name: ".react",
    value: 95,
    delay: 1,
  },
  {
    id: 2,
    name: ".html&CSS",
    value: 90,
    delay: 1.2,
  },
  {
    id: 3,
    name: ".redux",
    value: 85,
    delay: 1.4,
  },
  {
    id: 4,
    name: ".shopify",
    value: 80,
    delay: 1.6,
  },
  {
    id: 5,
    name: ".wordpress",
    value: 75,
    delay: 1.8,
  },
  {
    id: 6,
    name: ".reactNative",
    value: 70,
    delay: 2,
  },
  {
    id: 7,
    name: ".flutter",
    value: 65,
    delay: 2.2,
  },
];
