import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Navbar/header';
import Hero from '../components/Navbar/Hero/Hero';
import CatalogCard from '../components/CatalogCard/catalogCard';
import CatalogDetail from '../components/CatalogDetail/catalogDetail'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<CatalogCard />} />
          <Route path="/item/:id" element={<CatalogDetail />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
