import React from 'react';

const defaultImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80';

function EventCard({ event }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={event.image || defaultImage}
        className="card-img-top"
        alt={event.name}
        style={{ objectFit: 'cover', height: '180px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{event.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{event.date} &bull; {event.time}</h6>
        <p className="card-text mb-1"><i className="bi bi-geo-alt-fill me-2"></i>{event.location}</p>
        <p className="card-text flex-grow-1">{event.description}</p>
        <button className="btn btn-register mt-auto" disabled>Register</button>
      </div>
    </div>
  );
}

export default EventCard; 