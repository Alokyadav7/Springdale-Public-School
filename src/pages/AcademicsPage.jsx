import React from "react";
import Footer from "../components/Footer";

const AcademicsPage = () => {
  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300
        ">
          Academics
        </h1>

        {/* Curriculum Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-8 text-blue-800">
            Curriculum
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Primary (Grades 1-5)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Secondary (Grades 6-10)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Senior Secondary (Grades 11-12)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="text-blue-800">Science Stream:</strong>{" "}
                  Physics, Chemistry, Biology, Mathematics, Computer Science,
                  English
                </li>
                <li>
                  <strong className="text-blue-800">Commerce Stream:</strong>{" "}
                  Accountancy, Business Studies, Economics, Mathematics, English
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Teaching Methodologies Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-semibold mb-6 text-blue-800">
            Teaching Methodologies
          </h2>
          <p className="text-lg text-gray-700">
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </section>

        {/* Educational Resources Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-semibold mb-6 text-blue-800">
            Educational Resources
          </h2>
          <p className="text-lg text-gray-700">
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
        </section>
      </div>
      <Footer />
    </div>
    
  );
};

export default AcademicsPage;
