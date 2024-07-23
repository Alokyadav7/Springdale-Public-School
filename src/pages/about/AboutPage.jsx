import React from "react";
import AboutSection from "../about/AboutSection";
import PrincipalMessage from "../about//PrincipalMessage";
import InfrastructureFacilities from "../about/InfrastructureFacilities";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <section className="bg-gray-200 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-around mb-8">
            <a
              href="#about"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
            >
              About Us
            </a>
            <a
              href="#principal"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
            >
              Principal's Message
            </a>
            <a
              href="#infrastructure"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
            >
              Infrastructure & Facilities
            </a>
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="principal">
            <PrincipalMessage />
          </div>
          <div id="infrastructure">
            <InfrastructureFacilities />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
