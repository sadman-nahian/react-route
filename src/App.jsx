import { useState } from 'react'

import './App.css'
 import { BrowserRouter, Routes,Route } from 'react-router-dom'

 import Home from './Pages/Home';
 import Error from './Pages/Error';
 import Contact from './Pages/Contact';
 import Navbar from './Components/Navbar';
 import About from './Pages/About';
 import Blog from './Pages/Blog';
 import Faq from './Pages/Faq';

function App() {
  

  return (
    <div>
      <h2>Welcome here</h2>
      <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} >
           <Route path='faq' element={<Faq/>}/>
        </Route>
          
        <Route path="*" element={<Error/>}/>
        <Route path="/:holder" element={<Blog/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  
  )
}

export default App
