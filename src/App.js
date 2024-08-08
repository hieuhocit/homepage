// Components
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

// Projects
import project1Image from './assets/images/project1.png';
import project2Image from './assets/images/project2.png';
import project3Image from './assets/images/project3.png';
import project4Image from './assets/images/project4.png';
import project5Image from './assets/images/project5.png';
import project6Image from './assets/images/project6.png';
import project7Image from './assets/images/project7.png';
import project8Image from './assets/images/project8.png';
import project9Image from './assets/images/project9.png';
import project10Image from './assets/images/project10.png';
import project11Image from './assets/images/project11.png';
import project12Image from './assets/images/project12.png';

export default function () {
  return `
    ${Header()}
    <main class="main">
      <div class="project-container">
        <h2>My work</h2>
  ${Project({
    img: project1Image,
    name: 'Weather Project',
    source: 'weather_app.git',
    livepreview: 'weather_app/',
    desc: 'A weather app that provides real-time forecasts, including current conditions, 7-day, and 24-hour forecasts.',
  })}

  ${Project({
    img: project2Image,
    name: 'Todo List Project',
    source: 'todo-list.git',
    livepreview: 'todo-list/',
    desc: 'The "To-Do List" app is a simple web application for managing tasks. It allows users to add, delete, and mark tasks as completed, helping to organize daily activities efficiently.',
  })}

  ${Project({
    img: project3Image,
    name: 'Model Shop Project',
    source: 'songoku-model-page.git',
    livepreview: 'songoku-model-page/',
    desc: 'The "Songoku Model Page" is a simple webpage featuring an image of Goku from Dragon Ball. The page highlights the character with basic visuals, providing fans a straightforward showcase.',
  })}
  ${Project({
    img: project4Image,
    name: 'Tic Tac Toe',
    source: 'tic-tac-toe.git',
    livepreview: 'tic-tac-toe/',
    desc: 'The "Tic-Tac-Toe" game is a simple, web-based version of the classic two-player game. Players take turns marking Xs and Os on a 3x3 grid, aiming to align three in a row to win.',
  })}
  ${Project({
    img: project5Image,
    name: 'Music Player',
    source: 'music-player.git',
    livepreview: 'music-player/',
    desc: 'The "Music Player" is a web-based application that allows users to play and control their favorite songs. It includes basic functionalities like play, pause, and skip, along with a simple user interface.',
  })}
  ${Project({
    img: project6Image,
    name: 'Admin Dashboard',
    source: 'admin-dashboard.git',
    livepreview: 'admin-dashboard/',
    desc: 'This is a sleek and modern admin dashboard with an intuitive interface for managing various aspects of your application efficiently.',
  })}
  ${Project({
    img: project7Image,
    name: 'Book Library',
    source: 'book-library.git',
    livepreview: 'book-library/',
    desc: 'This is a stylish book library interface, designed for browsing and managing book collections with a user-friendly.',
  })}
  ${Project({
    img: project8Image,
    name: 'Rock Paper Scissors',
    source: 'rock-paper-scissors.git',
    livepreview: 'rock-paper-scissors/',
    desc: 'This is a fun and interactive Rock-Paper-Scissors game with a clean design.',
  })}
  ${Project({
    img: project9Image,
    name: 'Sign Up Form',
    source: 'sign-up-form.git',
    livepreview: 'sign-up-form/',
    desc: 'This GitHub repository features a sign-up form project with a clear and responsive design, focusing on user-friendly registration and form validation.',
  })}
  ${Project({
    img: project10Image,
    name: 'Calculator',
    source: 'calculator.git',
    livepreview: 'calculator/',
    desc: 'This is a straightforward and functional calculator with a clean interface, offering essential arithmetic operations in an easy-to-use format.',
  })}
  ${Project({
    img: project11Image,
    name: 'Etch a Sketch',
    source: 'Etch-a-Sketch.git',
    livepreview: 'Etch-a-Sketch/',
    desc: 'This is an interactive Etch-a-Sketch tool with a simple, engaging interface, allowing users to draw and create designs with ease.',
  })}
  ${Project({
    img: project12Image,
    name: 'Battleship',
    source: 'battleship.git',
    livepreview: 'battleship/',
    desc: 'This is a classic Battleship game with a polished interface, offering an engaging and strategic gameplay experience for users to challenge their opponents.',
  })}
      </div>
    </main>
    <footer class="footer">
      ${Footer()}
    </footer>
  `;
}
