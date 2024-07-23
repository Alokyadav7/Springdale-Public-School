import React from "react";

const AboutSection = () => {
  return (
    <section className="py-12 bg-white shadow-lg rounded-lg mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">About Us</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          <strong className="text-blue-600">Vision:</strong> To create a
          learning environment that fosters academic excellence, critical
          thinking, and ethical values.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          <strong className="text-blue-600">Mission:</strong> To empower
          students with the knowledge, skills, and values needed to thrive in
          a dynamic world.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
