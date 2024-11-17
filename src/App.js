// src/App.js
import React from 'react';
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
import SkillsPage from './pages/SkillsPage/SkillsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
