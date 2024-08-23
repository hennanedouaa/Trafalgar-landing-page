import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Section3  from './Components/Section3';
import Section4  from './Components/Section4';
import Testimonials from "./Components/Testimonials";


function App() {
  return (
    <div className="flex flex-col overflow-y-auto min-h-screen bg-white">
      <NavBar />
      <div className="flex-grow">
        {/* Main content goes here */}
        <About/>
        <Services/>
        <Section3/>
        <Section4/>
        <Testimonials/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
