// ContactUs.js
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function ContactUs() {
  useEffect(() => {
    // Redirect to Portfolio after 2 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = '../portfolio/portfolio';
    }, 2000);

    return () => clearTimeout(redirectTimer); // Cleanup timer
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Redirecting to Portfolio...</p>
      <Redirect to="../portfolio/portfolio" /> {/* This is here for SSR, but will not be rendered */}
    </div>
  );
}

export default ContactUs;
