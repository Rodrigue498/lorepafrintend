import React from "react";

const AboutUs1 = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <h2 className="text-lg font-semibold text-gray-600 uppercase tracking-wide mb-4">
          Join the Success
        </h2>
        <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
          We are a trusted trailer rental platform
        </h1>

        {/* Content Section */}
        <p className="text-2xl text-gray-700 mb-6">
          From construction entrepreneurs to landscaping professionals, farmers,
          and more, many people search for trailers to rent without access to a
          reliable platform to meet their needs. Meanwhile, hundreds of unused
          trailers remain parked across the province. The demand for such
          equipment is constant, and supply is widely available, but no service
          efficiently connects renters with trailer owners.
        </p>
        <p className="text-2xl text-gray-700">
          That's why Lorepa was created: to bridge this gap by offering a
          simple, advantageous solution. Our platform allows trailer owners to
          generate passive income by making their equipment available to
          businesses or individuals. Until now, many owners hesitated to rent
          out their trailers due to the complications it could represent. On
          the other hand, renters are often limited by traditional rental
          agencies, whose hours, high fees, and restricted inventory don't
          always meet their expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs1;
