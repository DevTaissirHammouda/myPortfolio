import './App.css';
import Navigation from './Component/Navigation';
import Home from './Component/component/Home/Home';
import {motion} from 'framer-motion';
import About from './Component/component/About/about/About';
import Project from './Component/component/Project/Project';
import Contact from './Component/component/Contact/Contact/Contact';
import Footer from './Component/component/Footer/Footer';
import './Scrollbar.css';
import Resumer from './Component/component/Resumer/Resumer/Resumer';
function App() {


  return ( 
    <div className="App scrollable-container">
        <Navigation/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
        </div>
  );
}

export default App;
