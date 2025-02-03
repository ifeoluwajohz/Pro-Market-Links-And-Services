import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import TermsAndConditions from './components/TermsAndConditions';

function App() {

  return (
    <Router>
      <Navbar />  
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/terms' elememt={<TermsAndConditions/>} />

      </Routes>


      <div id="main">
      <Faq />
      <Footer />  
      </div>
    </Router>
      
      
  )
}

export default App
