import './App.css';
import Navigation from './Component/Navigation';
import Home from './Component/component/Home/Home';
import {motion} from 'framer-motion';
import About from './Component/component/About/about/About';
import Project from './Component/component/Project/Project';
import Contact from './Component/component/Contact/Contact/Contact';
function App() {
  return (
    <div className="App">
    
        <Navigation/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        </div>
        
  );
}

export default App;
