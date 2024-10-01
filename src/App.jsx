import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'
import Home from './components/Home';

function App() {

  return (
    <Router>
      <Navbar />  
      <Home />
      
      <Routes>

      </Routes>
      <div id="main">
      <Footer />  

      </div>
    </Router>
      
      
  )
}

export default App
