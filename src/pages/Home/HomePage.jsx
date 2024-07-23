import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assest/logo.jpg";

import sportsDayImg from "../../assest/sports_day.jpg";
import scienceExhibitionImg from "../../assest/science_exhibition.jpg";
import culturalFestImg from "../../assest/cultural_fest.jpg";
import studentsImg from "../../assest/students.JPG";
import galleryImg from "../../assest/gallery.jpg";

import aboutUsImg from "../../assest/students.JPG"; // Placeholder image
import academicsImg from "../../assest/students.JPG"; // Placeholder image
import admissionsImg from "../../assest/students.JPG"; // Placeholder image
import contactImg from "../../assest/students.JPG"; // Placeholder image
import facultyImg from "../../assest/students.JPG"; // Placeholder image
import Footer from "../../components/Footer";

const carouselItems = [
  {
    id: 1,
    text: "Annual Sports Day - Celebrating Excellence in Sports",
    image: sportsDayImg,
  },
  {
    id: 2,
    text: "Science Exhibition - Showcasing Student Innovations",
    image: scienceExhibitionImg,
  },
  {
    id: 3,
    text: "Cultural Fest - Embracing Diversity and Creativity",
    image: culturalFestImg,
  },
];

const quickLinks = [
  { id: 1, text: "About Us", href: "/about" },
  { id: 2, text: "Academics", href: "/academics" },
  { id: 3, text: "Admissions", href: "/admissions" },
  { id: 4, text: "Faculty", href: "/faculty" },
  { id: 5, text: "Students", href: "/students" },
  { id: 6, text: "Gallery", href: "/gallery" },
  { id: 7, text: "Contact Us", href: "/contact" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="text-center">
      {/* Navigation Links */}
      <nav className="bg-blue-600 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-2 mb-4">
            {quickLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Logo and Welcome Message */}
      <img
        src={logo}
        alt="Springdale Public School Logo"
        className="mx-auto my-4 w-32 h-32 object-contain"
      />
      <h1 className="text-5xl font-bold mt-4 text-blue-800">
        Springdale Public School
      </h1>
      <p className="mt-2 text-gray-600 text-lg">
        Welcome to Springdale Public School, where we nurture young minds for a
        brighter future.
      </p>

      {/* Carousel */}
      <div className="relative mt-8">
        <div className="relative w-full h-[50vh] overflow-hidden rounded-md">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white p-4">
                <p className="text-xl font-semibold text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      {/* About Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={aboutUsImg}
              alt="About Us"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                About Us
              </h2>
              <p className="text-gray-700 mb-4">
                Learn more about our history, vision, and mission. Discover what
                makes Springdale Public School unique and how we strive to offer
                a quality education to our students.
              </p>
              <Link
                to="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={academicsImg}
              alt="Academics"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                Academics
              </h2>
              <p className="text-gray-700 mb-4">
                Explore our comprehensive curriculum, teaching methodologies,
                and educational resources designed to provide a well-rounded
                education for our students.
              </p>
              <Link
                to="/academics"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={studentsImg}
              alt="Students"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                Student Life
              </h2>
              <p className="text-gray-700 mb-4">
                Discover the vibrant life at Springdale, from our diverse range
                of extracurricular activities to the achievements and
                opportunities available to our students.
              </p>
              <Link
                to="/students"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={galleryImg}
              alt="Gallery"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                Gallery
              </h2>
              <p className="text-gray-700 mb-4">
                Explore our gallery to see the various events, activities, and
                special moments captured at Springdale. Our gallery provides a
                glimpse into the vibrant school life.
              </p>
              <Link
                to="/gallery"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={admissionsImg}
              alt="Admissions"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                Admissions
              </h2>
              <p className="text-gray-700 mb-4">
                Find out about our admission process, requirements, and
                deadlines. Learn how to apply and join the Springdale community.
              </p>
              <Link
                to="/admissions"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={facultyImg}
              alt="Faculty"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                Faculty
              </h2>
              <p className="text-gray-700 mb-4">
                Meet our dedicated and experienced faculty members who are
                committed to providing an excellent education and nurturing the
                growth of our students.
              </p>
              <Link
                to="/faculty"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={contactImg}
              alt="Contact Us"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                Get in touch with us for any inquiries or additional
                information. We're here to help and provide you with all the
                details you need.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
