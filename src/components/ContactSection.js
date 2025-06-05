import React from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: 'https://img.icons8.com/color/48/000000/linkedin.png',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: 'https://img.icons8.com/color/48/000000/facebook.png',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: 'https://img.icons8.com/color/48/000000/instagram-new.png',
  },
  {
    name: 'X',
    url: 'https://x.com/',
    icon: 'https://img.icons8.com/ios-filled/48/000000/twitterx--v2.png',
  },
];

function ContactSection() {
  return (
    <section id="contact" className="bg-light py-5 mt-5">
      <div className="container text-center">
        <h2>Contact Us</h2>
        <p className="mb-1">Have questions or want to partner with us?</p>
        <p>Email: <a href="mailto:info@aroundtown.com">info@aroundtown.com</a></p>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} style={{ display: 'inline-block' }}>
              <img src={link.icon} alt={link.name} width="32" height="32" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))' }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection; 