import React from "react";

const BlogPage = () => {
  return (
    <div 
      className="relative flex   min-h-screen justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${require("../../assets/turo.jpeg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text Overlay on Right */}
      <div className=" bg-opacity-80   rounded-lg shadow-lg mr-10">
        <h1 className="text-[200px] text-white">Lorepa vs Towlos</h1>
      </div>
    </div>
  );
};

export default BlogPage;
