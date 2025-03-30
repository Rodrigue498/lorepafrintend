import React,{useEffect} from "react";
import { ReviewCard } from "./review";

const TrailerDetails = ({trailer}) => {
  const reviews = Array.isArray(trailer?.reviews) ? trailer.reviews : [];
  if (!trailer || !Array.isArray(trailer.reviews)) {
    return <p>No reviews available.</p>;
  }
  
  // useEffect(() => {
  //   console.log("Trailer reviews:", trailer?.reviews);
  //   if (Array.isArray(trailer?.reviews)) {
  //     trailer.reviews.forEach((review, index) => {
  //       console.log(`Review ${index}:`, review);
  //     });
  //   }
  // }, [trailer]);
  
  return (

    <div className="max-w-6xl justify-center mx-auto p-6 flex flex-row gap-8">
      
      {/* Left Section - Trailer and Host Details */}
      <div className="w-1/2 bg-white shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold">{trailer?.location}</h3>
        <img 
          src="/path/to/map-image.png" 
          alt="Trailer Location" 
          className="w-full rounded-md my-4"
        />

        <h3 className="text-xl font-bold">{trailer?.owner?.name}</h3>
        <div className="flex items-center gap-4 my-4">
          <img 
            src="/path/to/host-image.png" 
            alt="Host" 
            className="w-12 h-12 rounded-full" 
          />
          <div>
            <p className="text-lg font-semibold">Brian</p>
            <p className="text-gray-500">{trailer?.owner?.trailer_count} Trailer | Joined "{trailer?.owner?.joined_at}</p>
            <p className="text-gray-500">⭐ {trailer?.owner?.rating ?? "No rating yet"}</p>
          </div>
        </div>

        <button className="w-full bg-red-500 text-white py-2 rounded-lg">
          Chat with Host
        </button>

        <h3 className="text-xl font-bold mt-6">Reviews</h3>
        {Array.isArray(trailer.reviews) && trailer.reviews.length > 0 ? (
  trailer.reviews.map((review, index) => (
    review && typeof review === "object" && review.id ? (
      <ReviewCard key={review.id} review={review} />
    ) : (
      <p key={index} className="text-red-500">Invalid review format.</p>
    )
  ))
) : (
  <p className="text-gray-500 mt-4">No reviews yet.</p>
)}


        <h3 className="text-xl font-bold mt-6">{trailer?.location}</h3>
        <p className="flex items-center gap-2 text-gray-700">
          📍 Boerne, TX 78006
        </p>
        <p className="text-gray-500 text-sm">
          Exact location will be revealed once the rental is approved.
        </p>
      </div>

      {/* Right Section - Google Map */}
      <section className="w-1/2 h-full">
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default TrailerDetails;
