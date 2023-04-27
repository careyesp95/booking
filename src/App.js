import  Home from  './pages/Home.js';
import Services from './pages/Services.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
  </BrowserRouter>

  ); 
} 

export default App;