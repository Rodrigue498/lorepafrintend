import React from "react";
import { Star } from "lucide-react";

const ratings = {
  overall: 4.89,
  totalReviews: 83,
  details: [
    { name: "Cleanliness", score: 4.5 },
    { name: "Maintenance", score: 4.7 },
    { name: "Communication", score: 4.9 },
    { name: "Comfort", score: 4.8 },
    { name: "Accuracy", score: 4.8 },
  ],
  reviewsCount: 74,
};

const comments = [
  {
    id: 1,
    user: "Jean-Marie",
    date: "December 24, 2024",
    comment: "Good vehicle",
    rating: 5,
    response: { name: "Philipp", text: "Thank you." },
  },
];
export function RatingBar({ name, score }){
  <div className="flex items-center justify-between mb-2">
    <span className="text-gray-700">{name}</span>
    <div className="flex-1 mx-3 bg-gray-300 h-2 rounded-full overflow-hidden">
      <div
        className="bg-purple-600 h-full rounded-full"
        style={{ width: `${(score / 5) * 100}%` }}
      />
    </div>
    <span className="text-gray-700">{score}</span>
  </div>
}

export function ReviewCard({ review }) {
  if (!review || typeof review !== "object") {
    return <p className="text-red-500">Invalid review data</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          {/* Star Rating */}
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={16}
                className={i < review.rating ? "text-purple-600" : "text-gray-300"}
                fill={i < review.rating ? "currentColor" : "none"}
              />
            ))}
          </div>
          
          {/* Reviewer Name */}
          <p className="font-semibold">{review.reviewer || "Anonymous"}</p>

          {/* Review Date */}
          <p className="text-gray-500 text-sm">
            {review.created_at ? new Date(review.created_at).toDateString() : "No date"}
          </p>
        </div>
      </div>

      {/* Review Comment */}
      <p className="mt-2 text-gray-700">{review.comment || "No comment provided."}</p>
    </div>
  );
}


const Reviews = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Ratings & Reviews</h2>

      {/* Overall Rating */}
      <div className="flex items-center mt-3">
        <p className="text-3xl font-bold">{ratings.overall}</p>
        <Star size={24} className="text-purple-600 mx-1" fill="currentColor" />
        <p className="text-gray-600">({ratings.totalReviews} reviews)</p>
      </div>

      {/* Category Ratings */}
      <div className="mt-4">
        {ratings.details.map((item, index) => (
          <RatingBar key={index} name={item.name} score={item.score} />
        ))}
        <p className="text-gray-500 text-sm mt-2">
          Based on reviews from {ratings.reviewsCount} guests
        </p>
      </div>

      {/* Comments Section */}
      <h3 className="text-xl font-semibold mt-6">Comments</h3>
      {comments.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
