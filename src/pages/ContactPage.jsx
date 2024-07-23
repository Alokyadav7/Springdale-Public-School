import React, { useState } from 'react';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your message! We will get back to you soon.');
    // Add form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h1>
      <div className="mb-8">
        <p className="text-lg mb-4">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p className="text-lg mb-4">Phone: <a href="tel:+11234567890" className="text-teal-600">+1 (123) 456-7890</a></p>
        <p className="text-lg mb-4">Email: <a href="mailto:info@springdale.edu" className="text-teal-600">info@springdale.edu</a></p>
        <div className="mb-6">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7086585491976!2d-122.40353268467904!3d37.786213979758145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cbdc8b5b9%3A0x3dce409f0918c291!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1609456723792!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Send Us a Message</h2>
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
            rows="4"
            required
          ></textarea>
        </label>
        <button type="submit" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
          Send Message
        </button>
        {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
      </form>
      <Footer />
    </div>
  );
};

export default ContactPage;
