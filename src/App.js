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
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contactme" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
