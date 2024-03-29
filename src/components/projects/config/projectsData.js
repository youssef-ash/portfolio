import triviaAppImg from "./projectsImages/trivia_app.png";
import weatherAppImg from "./projectsImages/weather_journal_app.png";
import VetClinicImg from "./projectsImages/vet_clinic.png";
import portfolioImg from "./projectsImages/portfolio.png";
import nileSurveyImg from "./projectsImages/nile_survey.png";

export const projectsData = [
  {
    id: 1,
    title: "Nile Survey Form",
    image: nileSurveyImg,
    description:
      "A React PWA for Nile Developments, The app collects visiting clients' data and sends it to a google sheet, the Sales team uses the collected data in their meetings with the clients",
    githubLink: "",
    liveLink: "",
  },
  {
    id: 2,
    title: "Online Vet Clinic",
    image: VetClinicImg,
    description:
      "A multi-lingual website for an online veterinary clinic built using NextJS, I built the website following SEO optimization guidelines, The styling for the website was done using CSS",
    githubLink: "",
    liveLink: "https://online-vet.vercel.app/",
  },
  {
    id: 3,
    title: "Trivia App",
    image: triviaAppImg,
    description:
      "A single page React application that utilizes the Open Trivia Database API to generate trivia questions based on the options the user chooses.",
    githubLink: "https://github.com/youssef-ash/trivia-app",
    liveLink: "https://trivia-quiz-ash.netlify.app",
  },
  {
    id: 4,
    title: "Weather Journal App",
    image: weatherAppImg,
    description:
      "A simple JavaScript application that utilizes the OpenWeather API to fetch the current weather in the USA zip code entered by the user and displays it on the page.",
    githubLink: "https://github.com/youssef-ash/weather-journal",
    liveLink: "https://weather-journal-ash.onrender.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    image: portfolioImg,
    description: "You're already here! 😄, take a look around.",
    githubLink: "https://github.com/youssef-ash/portfolio",
    liveLink: "https://youssefashwal.netlify.app",
  },
];
