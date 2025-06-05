import React from 'react';

const heroStyle = {
  backgroundImage: 'linear-gradient(rgba(0, 30, 60, 0.6), rgba(0, 30, 60, 0.6)), url(https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  minHeight: '380px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function HeroSection() {
  return (
    <section className="text-center py-5" style={heroStyle}>
      <div className="container">
        <h1 className="display-4 fw-bold">Discover Events Near You</h1>
        <p className="lead mt-3">Find and register for the best local events happening in your area.</p>
      </div>
    </section>
  );
}

export default HeroSection; 