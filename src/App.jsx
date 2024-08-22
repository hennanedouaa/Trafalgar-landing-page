import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col overflow-y-auto min-h-screen bg-white">
      <NavBar />
      <div className="flex-grow">
        {/* Main content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
