
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from "./components/AllRoutes";
import About from './pages/About';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    <About />
    <Resume />
    <Contact />
    <Skill />
    
    </div>
  );
}

export default App;
