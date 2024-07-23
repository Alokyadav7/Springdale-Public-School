import React from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.jpg"; 

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo and About */}
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="Springdale Public School Logo" className="w-24 h-24 object-contain mb-4" />
            <h2 className="text-2xl font-bold mb-2">Springdale Public School</h2>
            <p className="text-gray-300">
              Providing quality education and fostering a nurturing environment for young minds.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/academics" className="hover:underline">Academics</Link></li>
              <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
              <li><Link to="/faculty" className="hover:underline">Faculty</Link></li>
              <li><Link to="/students" className="hover:underline">Students</Link></li>
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Springdale Ave, Cityname, State, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: info@springdale.edu</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Springdale Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
