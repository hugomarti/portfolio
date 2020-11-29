import StemHatchLogo from "../assets/stemHatchLogo.svg";
import LupasDeSolLogo from "../assets/lupasDeSolLogo.svg";
import MovieDatabaseLogo from "../assets/movieDatabaseLogo.svg";
import BitLogo from "../assets/8bitLogo.svg";
import Project1BgImage from "../assets/projectImage1.png";
import Project2BgImage from "../assets/projectImage2.png";
import Project3BgImage from "../assets/projectImage3.png";
import Project4BgImage from "../assets/projectImage4.png";

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
    link: "",
  },
  {
    id: 4,
    title: "Game Items Store",
    logo: BitLogo,
    route: "project/eightBit",
    link: "",
  },
];

export const projectPages = {
  stemHatch: {
    bgImage: Project1BgImage,
    logo: StemHatchLogo,
    type: "Digital Music Store",
    title: ".stemHatch",
    description:
      "Stem Hatch is a personal project currently under development, focused on selling music online, where music producers can sell their music copy rights to DJs and content creators. Made with React, Redux, styled with Chakra UI and a previous UI and graphic design made with Figma and Illustrator",
    link: "https://youthful-curran-2c56a6.netlify.app/",
    sourceCode: "https://github.com/hugomarti/stem-hatch-2",
    disableButton: true,
  },
  lupasDeSol: {
    bgImage: Project2BgImage,
    logo: LupasDeSolLogo,
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
    logo: MovieDatabaseLogo,
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
    logo: BitLogo,
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
