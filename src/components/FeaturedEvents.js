import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

const dummyEvents = [
  {
    id: 1,
    name: 'Tech Conference 2024',
    date: '2024-07-15',
    time: '10:00 AM',
    location: 'Blue Area, Islamabad',
    description: 'Join industry leaders and tech enthusiasts for a day of networking and learning.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Summer Music Festival',
    date: '2024-08-05',
    time: '4:00 PM',
    location: 'F-9 Park, Islamabad',
    description: 'Enjoy live performances from top artists in a fun outdoor setting.',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Art Exhibition',
    date: '2024-07-22',
    time: '6:30 PM',
    location: 'F-10, Islamabad',
    description: 'Experience stunning works from local and international artists at our annual art exhibition.',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0JTIwZXhoaWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    name: 'Startup Pitch Day',
    date: '2024-07-29',
    time: '2:00 PM',
    location: 'H-11, Islamabad',
    description: 'Watch startups pitch their ideas to investors and win prizes.',
    image: 'https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RhcnR1cCUyMFBpdGNoJTIwRGF5fGVufDB8fDB8fHww',
  },
  {
    id: 5,
    name: 'Family Fun Run',
    date: '2024-08-12',
    time: '8:00 AM',
    location: 'DHA 2, Islamabad',
    description: 'A 5K run for all ages, with games and food trucks at the finish line.',
    image: 'https://media.istockphoto.com/id/157673108/photo/marathon.jpg?s=612x612&w=0&k=20&c=8ZpdhoQAfYezq-JiChYtX0V0JL0aHnWAdObVD1jmz_E=',
  },
  {
    id: 6,
    name: 'Food Carnival',
    date: '2024-08-20',
    time: '12:00 PM',
    location: 'Bahria Town, Islamabad',
    description: 'Taste delicious dishes from around the world at our annual food carnival.',
    image: 'https://images.unsplash.com/photo-1739080577313-a9271bba6707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rm9vZCUyMENhcm5pdmFsfGVufDB8fDB8fHww',
  },
];

function FeaturedEvents({ searchTerm }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setEvents(dummyEvents);
      setLoading(false);
    }, 500);
  }, []);

  // Only match search term as a whole word in event name (case-insensitive)
  const filteredEvents = events.filter(event => {
    if (!searchTerm.trim()) return true;
    const regex = new RegExp(`\\b${searchTerm.trim().replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\b`, 'i');
    return regex.test(event.name);
  });

  return (
    <section id="featured-events">
      <h2 className="mb-4">Featured Events</h2>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div className="col-md-4 mb-4" key={event.id}>
                <EventCard event={event} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-muted">No events found.</div>
          )}
        </div>
      )}
    </section>
  );
}

export default FeaturedEvents; 