import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Admin from './pages/Admin';
import Skills from './components/Skills';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="contenedor-grid">
        <Header />
        <main className="main-home">
          <Routes>
            <Route path="/" element={<><Home /><Skills /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
