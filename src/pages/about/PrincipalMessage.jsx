import React from "react";

const PrincipalMessage = () => {
  return (
    <section className="bg-gray-100 py-12 shadow-lg rounded-lg mb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          Message from the Principal
        </h2>
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          At Springdale, we believe in nurturing the potential of every student
          and guiding them towards a successful future.
        </p>
      </div>
    </section>
  );
};

export default PrincipalMessage;
