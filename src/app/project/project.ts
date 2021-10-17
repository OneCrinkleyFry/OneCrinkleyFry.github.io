export class Project {
   title: string = '';
   source: string = '';
   description: string = '';
   link: string = '';
   repo: string = '';

   constructor(title:string, source:string, desc: string, link: string, repo: string) {
      this.title = title;
      this.source = source;
      this.description = desc;
      this.link = link;
      this.repo = repo;
   }

   static projects: Project[] = [
      {
         title: 'Dino Store',
         source: './project-imgs/dino-store.png',
         description: 'A Mern Stack App Ecommerce app for Dinosaur enthusiasts',
         link: 'https://ancient-lake-97986.herokuapp.com',
         repo: 'https://github.com/OneCrinkleyFry/dino-store'
      },
      {
         title: 'Book Search',
         source: './project-imgs/book-Search.png',
         description: 'A Mern Stack App That allows a user to view and save books found on the google API',
         link: 'https://mighty-thicket-20659.herokuapp.com/',
         repo: 'https://github.com/onecrinkleyfry/book-engine-search'
      },
      {
         title: 'Job Finder',
         source: './project-imgs/job-finder.png',
         description: 'An app to help find jobs in your area.',
         link: 'https://buzzword-job-finder.herokuapp.com',
         repo: 'https://github.com/onecrinkleyfry/job-finder'
      },
      {
         title: 'The Tech Blog',
         source: './project-imgs/tech-blog.png',
         description: 'An app to create and save, and view tech posts',
         link: 'https://cryptic-falls-87551.herokuapp.com',
         repo: 'https://github.com/onecrinkleyfry/tech-blog'
      },
      {
         title: 'Budget Tracker',
         source: './project-imgs/budget-tracker.png',
         description: 'An app to help keep track of income, and expenses.',
         link: 'https://powerful-plains-68788.herokuapp.com/',
         repo: 'https://github.com/onecrinkleyfry/budget-tracker'
      },
      {
         title: 'Note Taker',
         source: './project-imgs/note-taker.png',
         description: 'An app to create and save notes allowing them to be accessed anywhere.',
         link: 'https://stark-waters-14486.herokuapp.com/',
         repo: 'https://github.com/onecrinkleyfry/note-taker'
      },
      {
         title: 'Game Finder',
         source: './project-imgs/game-finder.png',
         description: 'A program that allows you to search for a game, see its reviews, and where you can buy it.',
         link: 'https://onecrinkleyfry.github.io/game-finder/',
         repo: 'https://github.com/onecrinkleyfry/game-finder'
      },
      {
         title: 'Weather Dashboard',
         source: './project-imgs/weather-dashboard.png',
         description: 'A program to display the weather for a searched city, and its 5 day forecast',
         link: 'https://onecrinkleyfry.github.io/day-planner/',
         repo: 'https://github.com/onecrinkleyfry/weather-dashboard'
      },
      {
         title: 'Day Planner',
         source: './project-imgs/day-planner.png',
         description: 'A planner to organize your day',
         link: 'https://onecrinkleyfry.github.io/day-planner/',
         repo: 'https://github.com/onecrinkleyfry/day-planner'
      },
      {
         title: 'Coding Quiz',
         source: './project-imgs/coding-quiz.png',
         description: 'A quiz  to test your knowledge on basic javascript principles',
         link: 'https://onecrinkleyfry.github.io/coding-quiz/',
         repo: 'https://github.com/onecrinkleyfry/coding-quiz'
      },
      {
         title: 'Password Generator',
         source: './project-imgs/password-generator.png',
         description: 'A password generator that takes 4 criteria, and outputs a password that fulfills all of them',
         link: 'https://onecrinkleyfry.github.io/password-generator/',
         repo: 'https://github.com/onecrinkleyfry/password-generator'
      }
   ];
}

