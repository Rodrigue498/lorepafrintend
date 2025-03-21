import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarDetailPage from ".";
import MoreCarDetailPage from "./moredetail";
import TrailerDetails from "./location";
import MoreCarDetailInfo from "./info";
import Reviews from "./review";
import axios from "axios";

export const CarDetailWrapper = () => {
  const { id } = useParams(); // Get trailer ID from URL
  console.log("Car ID:", id); // Debugging

  const API_URL = process.env.REACT_APP_API_URL;
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return; // Prevent API call if id is missing

    const token = localStorage.getItem("token");
    axios
      .get(`${API_URL}/trailers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response", response.data); // Debugging
        setTrailer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.message || "Failed to load trailer details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!trailer) return <p>Car not found.</p>;

  return (
    <>
      <CarDetailPage trailer={trailer} />
      <MoreCarDetailPage trailer={trailer} />
      <TrailerDetails trailer={trailer} />
      <MoreCarDetailInfo trailer={trailer} />
      <Reviews trailer={trailer} />
    </>
  );
};
