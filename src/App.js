import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';  
// import Header from './components/Header';  
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        {/* <Header/>      */}

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>  

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

          
    </div>
  );
}

export default App;
