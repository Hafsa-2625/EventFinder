import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import FeaturedEvents from './components/FeaturedEvents';
import ContactSection from './components/ContactSection';
import React from 'react';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container my-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FeaturedEvents searchTerm={searchTerm} />
      </div>
      <ContactSection />
    </div>
  );
}

export default App;
