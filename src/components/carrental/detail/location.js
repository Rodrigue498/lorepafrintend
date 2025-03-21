import React from "react";

const TrailerDetails = ({trailer}) => {
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
        {trailer?.reviews?.length > 0 ? (
          trailer.reviews.map((review) => (
            <div key={review.id} className="border p-4 my-2 rounded-lg">
              <p className="font-semibold">{review.reviewer}</p>
              <p>⭐ {review.rating}/5</p>
              <p className="italic">{review.comment}</p>
              <p className="text-gray-500 text-sm">{review.created_at}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
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
