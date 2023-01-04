import React from 'react';
import { Route, Routes } from "react-router-dom";
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Skill from '../pages/Skill';
import About from '../pages/About';


function AllRoutes(){

  return (
        <div>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />      
        </Routes> 


        </div>



  )
}

export default AllRoutes