import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation';
import Home from './Component/component/Home/Home';
import {motion} from 'framer-motion';
import About from './Component/component/About/about/About';
function App() {
  return (
    <div className="App">
    
        <Navigation/>
        <Home/>
        <About/>
        </div>
        
  );
}

export default App;
