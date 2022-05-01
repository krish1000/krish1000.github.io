import logo from './logo.svg';
import './App.css';

// import { Link } from 'react-router-dom'
// import {BrowserRouter as Router} from 'react-router-dom'
import Welcome from './sections/welcome.jsx';
import About from './sections/about.jsx';
import Contact from './sections/contact.jsx';
import Projects from './sections/projects.jsx';
import { NavBar1 } from './sections/navbar.jsx';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Welcome />
//         <p>
//           testing 123321
//         </p>
        
//       </header>
//     </div>
//   );
// }

// export default App;

const App = () => {
    return (
    <>
      <div className="App">
        <NavBar1 />

        <Welcome />

        <About />

        <Projects />
        
        <Contact />
        
      </div>
      
    </>
  );
}
export default App;
