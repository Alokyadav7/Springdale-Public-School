import React from 'react';
import Footer from '../components/Footer';

const FacultyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Meet Our Faculty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyProfiles.map((profile, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-blue-900">{profile.name}</h2>
            <p className="text-blue-700">{profile.position}</p>
            <p className="text-blue-600">{profile.qualification}</p>
            <p className="text-blue-500">{profile.experience} years of experience</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const facultyProfiles = [
  { name: 'John Doe', position: 'Principal', qualification: 'M.Ed', experience: 20 },
  { name: 'Jane Smith', position: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: 15 },
  { name: 'Emily Johnson', position: 'English Teacher', qualification: 'M.A. in English', experience: 10 },
  { name: 'Michael Brown', position: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: 8 },
  { name: 'Sophia Davis', position: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: 12 },
  { name: 'David Wilson', position: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: 5 },
];

<Footer />

export default FacultyPage;
