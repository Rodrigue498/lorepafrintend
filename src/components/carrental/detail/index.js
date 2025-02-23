
import { useParams } from "react-router-dom";

const CarDetailPage = () => {
  const { id } = useParams();

  // Sample Car Data (Replace with API Data)
  const car = {
    id: id,
    name: "Toyota Corolla 2017",
    type: "SE",
    rating: 4.89,
    reviews: 105,
    priceBefore: 164,
    priceAfter: 148,
    imageMain: require("../../../assets/rv4.jpeg"),
    imageGallery: [
      require("../../../assets/ra1.png"),
      require("../../../assets/ra2.png"),
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4 ">
      {/* Header */}
      

      {/* Car Images */}
      <div className="grid grid-cols-3 gap-2 mt-24">
        <img
          src={car.imageMain}
          alt={car.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        <div className="grid gap-2">
          {car.imageGallery.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
      </div>
<div className="flex flex-row">
      {/* Car Details */}
      <div className="mt-6 mr-96">
        <h2 className="text-3xl font-bold">{car.name}</h2>
        <p className="text-gray-500">{car.type}</p>
        <p className="text-xl font-bold text-purple-600 mt-2">
          ⭐ {car.rating} <span className="text-gray-500">({car.reviews} trip)</span>
        </p>
      </div>

      {/* Pricing */}
      <div className="mt-4 p-4 rounded-lg max-w-lg">
        <p className="text-gray-400 line-through text-lg">${car.priceBefore}</p>
        <p className="text-xl font-bold text-black">${car.priceAfter}  total</p>
        <p className="text-sm text-gray-500">Price excluding tax</p>
      </div>
    </div>
    </div>
  );
};

export default CarDetailPage;
