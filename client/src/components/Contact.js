// client/src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('An error occurred, please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        {status && <p className="status">{status}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
