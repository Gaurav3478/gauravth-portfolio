// src/App.js
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/Navbar/Navbar';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import InitialPage from './pages/InitialPage/InitialPage'; // Import the InitialPage component
import './App.css';

function App() {
  const [showInitialPage, setShowInitialPage] = useState(true);

  return (
    <>
      {showInitialPage ? (
        <InitialPage onTransitionEnd={() => setShowInitialPage(false)} />
      ) : (
        <BrowserRouter>
          <NavBar />
          <hr className='horizontal-line'></hr>
          <Routes>
            <Route index exact path="/" element={<HomePage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
