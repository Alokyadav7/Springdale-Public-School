import React from "react";
import Footer from "../components/Footer";

const AdmissionsPage = () => {
  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600">Admissions</h1>

        {/* Admission Process Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold mb-6 ">Admission Process</h2>
          <p className="text-lg mb-4">
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
          <a
            href="/path_to_downloadable_form"
            className="text-blue-500 hover:underline"
          >
            Download Admission Form
          </a>
        </section>

        {/* Admission Criteria Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold mb-6">Admission Criteria</h2>
          <p className="text-lg mb-4">
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades.
          </p>
        </section>

        {/* Important Dates Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Important Dates</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Admission Form Availability:</strong> March 1st
            </li>
            <li>
              <strong>Last Date for Submission:</strong> March 31st
            </li>
            <li>
              <strong>Entrance Test:</strong> April 15th
            </li>
            <li>
              <strong>Announcement of Results:</strong> April 30th
            </li>
          </ul>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AdmissionsPage;
