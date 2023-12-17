import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import {motion} from 'framer-motion';
import About from './Component/About';
function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home/>
        </div>
  );
}

export default App;
