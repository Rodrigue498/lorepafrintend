
import { useParams } from "react-router-dom";

const CarDetailPage = ({trailer}) => {
  const { id } = useParams();

  // Sample Car Data (Replace with API Data)
  return (
    <div className="max-w-6xl mx-auto p-4 ">
      {/* Header */}
      

      {/* Car Images */}
      <div className="grid grid-cols-3 gap-2 mt-24">
        <img
          src={trailer?.imageMain || "default-image.jpg"} // Use API data
          alt={trailer?.title || "Trailer"}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        <div className="grid gap-2">
          {trailer?.imageGallery?.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
      </div>
<div className="flex flex-row">
      {/* Car Details */}
      <div className="mt-6 mr-96">
        <h2 className="text-3xl font-bold">{trailer?.title}</h2>
        <p className="text-gray-500">{trailer?.type}</p>
        <p className="text-xl font-bold text-purple-600 mt-2">
          ⭐ {trailer?.rating} <span className="text-gray-500">({trailer?.reviews} trip)</span>
        </p>
      </div>

      {/* Pricing */}
      <div className="mt-4 p-4 rounded-lg max-w-lg">
          <p className="text-gray-400 line-through text-lg">${trailer?.priceBefore || "N/A"}</p>
          <p className="text-xl font-bold text-black">${trailer?.priceAfter || "N/A"} total</p>
          <p className="text-sm text-gray-500">Price excluding tax</p>
        </div>

    </div>
    </div>
  );
};

export default CarDetailPage;
