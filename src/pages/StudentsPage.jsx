import React from 'react';
import Footer from '../components/Footer'; // Import Footer component

const StudentsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Student Life at Springdale</h1>
      <section className="bg-green-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-700">Extracurricular Activities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</li>
          <li>Literary Society, Environmental Club, Astronomy Club, Coding Club</li>
        </ul>
      </section>
      <section className="bg-yellow-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-700">Achievements</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>
      <section className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Student Council</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>

      {/* Include the Footer */}
      <Footer />
    </div>
  );
};

export default StudentsPage;
