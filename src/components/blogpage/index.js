import React from "react";

const BlogPage = () => {
  return (
    <div 
      className="relative flex min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${require("../../assets/turo.jpeg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text Overlay on Right */}
      <div className=" p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg  max-w-8xl xl:ml-64">
        <h1 className="text-8xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[200px] text-white font-bold">
          Lorepa vs Turo
        </h1>
      </div>
    </div>
  );
};

export default BlogPage;