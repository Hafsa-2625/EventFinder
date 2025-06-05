import React from 'react';

// Use local logo image instead of external URL
const logoUrl = process.env.PUBLIC_URL + '/Screenshot 2025-06-05 161950.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'linear-gradient(90deg, #233554 0%, #4f709c 100%)', zIndex: 1030 }}>
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center text-white" href="#">
          <a href="#" style={{ display: 'inline-block' }}>
            <img
              src={logoUrl}
              alt="AroundTown logo screenshot"
              width="48"
              height="48"
              className="me-2"
              style={{
                borderRadius: '10px',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                objectFit: 'cover',
                objectPosition: 'center',
                width: '48px',
                height: '48px',
              }}
            />
          </a>
          AroundTown
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#featured-events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;