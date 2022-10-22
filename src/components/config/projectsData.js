import triviaAppImg from './projectImages/trivia_app.png';
import weatherAppImg from './projectImages/weather_journal_app.png';
import portfolioImg from './projectImages/portfolio.png';

export const projectsData = [
  {
    id: 1,
    title: 'Trivia App',
    image: triviaAppImg,
    description:
      'A single page React application that utilizes the Open Trivia Database API to generate trivia questions based on the options the user chooses.',
    githubLink: 'https://github.com/youssef-ash/trivia-app',
    liveLink: '',
  },
  {
    id: 2,
    title: 'Weather Journal App',
    image: weatherAppImg,
    description:
      'A simple JavaScript application that utilizes the OpenWeather API to fetch the current weather in the USA zip code entered by the user.',
    githubLink: 'https://github.com/youssef-ash/weather-journal',
    liveLink: '',
  },
  {
    id: 3,
    title: 'Portfolio',
    image: portfolioImg,
    description: "You're already here! 😄, take a look around.",
    githubLink: 'https://github.com/youssef-ash/portfolio',
    liveLink: '',
  },
];
