import React from "react";

const BlogComparison = () => {

const TrailerData = [
    {
      model: '2022 PJ Car Hauler (20’ x 102”)',
      price: 8200,
      rentalRate: 112,
      extraIncome: 672,
      roiYears: 1.0,
    },
    {
      model: '2021 Arising Enclosed Cargo Trailer (22’ x 102”)',
      price: 9995,
      rentalRate: 155,
      extraIncome: 930,
      roiYears: 0.9,
    },
    {
      model: '2023 14 LD Big Tex dump trailer (14’ x 83”)',
      price: 12066,
      rentalRate: 135,
      extraIncome: 810,
      roiYears: 1.2,
    },
    {
      model: '2021 Load Trailer Single Axle utility trailer (10’ x 60”)',
      price: 1610,
      rentalRate: 70,
      extraIncome: 420,
      roiYears: 0.3,
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-12">
      {/* Blog Title */}
      <div className="max-w-4xl">
        <h1 className="text-6xl font-bold text-gray-800 text-center mb-6">
         Lorepa .vs Turo: An In-Depth Comparison
        </h1>
        

        {/* Blog Introduction */}
        <p className="text-xl text-gray-700 mb-8 text-center">
          Peer-to-peer marketplaces are a common way to make money these days.
          From Airbnb and VRBO to Lorepa and Turo—there are plenty of
          opportunities for repurposing assets to generate cash! In this blog,
          we will compare Lorepa and Turo as a profitable side hustle.
        </p>

        {/* Comparison Sections */}
        <div className="space-y-10">
          {/* Lorepa Section */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Turo</h2>
            <p className="text-xl text-gray-700">
              Turo operates as a car-sharing network, similar to Airbnb but for
              cars, offering a wide range of over 800 makes and models. Renters
              can select various additional features such as car seats and
              pickup locations. Car owners also set their requirements, such as
              mileage limits and minimum renter age. With prices advertised as
              up to 35% less than traditional rental companies, Turo presents a
              cost-effective option for renters. Hosts on Turo can earn an
              average of $500 per month for one car, and the platform offers
              additional insurance options for both renters and owners. However,
              Turo’s service does have limitations, such as not supporting
              one-way trips and typically having mileage limitations set by car
              owners.
            </p>
          </div>

          {/* Towlos Section */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Lorepa</h2>
            <p className="text-xl text-gray-700 mb-4">
              In contrast, Lorepa focuses on trailer rentals, connecting trailer
              owners with renters. This niche market includes a diverse range of
              trailers, catering to specific needs like moving or transporting
              vehicles. The rental process is straightforward—finding trailers
              in the area, booking the right one, and then towing. For trailer
              owners, listing on Lorepa presents an opportunity to earn income
              from an otherwise idle asset. User feedback highlights the
              convenience and ease of the rental process, and the ability to
              make money from renting out trailers. Lorepas targets a specific
              market segment, making it an attractive platform for those with
              trailers used for occasional purposes.
            </p>
            <p className="text-xl text-gray-700 mb-8">
              The gig economy is a popular way to earn money, whether you work a
              nine-to-five job, or you swap between various side hustles.
              Generating income through passive streams, like renting out an
              asset, is a great way to earn extra income.
            </p>
          </div>
          <div className="max-w-6xl w-full">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800  mb-6">
        Lorepa vs. Turo
        </h1>

        {/* Conclusion */}
        <p className="text-xl text-gray-700 mb-6">
          In conclusion, while Lorepa offers a broader car rental service with
          its own set of benefits, investing in a trailer to become a Turo
          host presents a more accessible and potentially more profitable
          venture, especially if you are looking into a peer-to-peer marketplace
          as a side hustle, and therefore have not purchased the rental asset
          yet. If you already own a spare car, or a trailer, the math is a
          little different, but many of the benefits of Turo remain!
        </p>
        <p className="text-xl text-gray-700 mb-8">
          The lower initial investment, reduced maintenance costs, and unique
          market position make Turo an appealing option for those looking to
          monetize an asset in the peer-to-peer rental space.
        </p>
</div>
          <div className="mt-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Turo Return on Investment
            </h2>
            <div className="overflow-x-auto">
            <table className="table-fixed border-collapse border border-slate-400 w-full text-gray-800">
  <thead>
    <tr className="bg-gray-100 text-left">
      <th className="p-4 border border-slate-300">New Car</th>
      <th className="p-4 border border-slate-300">Purchase Price*</th>
      <th className="p-4 border border-slate-300">Daily Rental Rate**</th>
      <th className="p-4 border border-slate-300">
        Extra monthly income earned if rented 6 days/mo
      </th>
      <th className="p-4 border border-slate-300">
        If rented 73 days per year (20%), it pays for itself in (years)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-4 border border-slate-300">2022 Honda Accord Sport 2.0T</td>
      <td className="p-4 border border-slate-300">$33,660</td>
      <td className="p-4 border border-slate-300">$49</td>
      <td className="p-4 border border-slate-300">$294</td>
      <td className="p-4 border border-slate-300">9.5</td>
    </tr>
    <tr>
      <td className="p-4 border border-slate-300">2021 Jeep Wrangler Sport S 4D</td>
      <td className="p-4 border border-slate-300">$40,915</td>
      <td className="p-4 border border-slate-300">$68</td>
      <td className="p-4 border border-slate-300">$408</td>
      <td className="p-4 border border-slate-300">8.4</td>
    </tr>
    <tr>
      <td className="p-4 border border-slate-300">2021 Tesla Model Y Performance 4D</td>
      <td className="p-4 border border-slate-300">$61,190</td>
      <td className="p-4 border border-slate-300">$89</td>
      <td className="p-4 border border-slate-300">$534</td>
      <td className="p-4 border border-slate-300">9.5</td>
    </tr>
    <tr>
      <td className="p-4 border border-slate-300">2023 Chevy Tahoe LS</td>
      <td className="p-4 border border-slate-300">$54,200</td>
      <td className="p-4 border border-slate-300">$104</td>
      <td className="p-4 border border-slate-300">$624</td>
      <td className="p-4 border border-slate-300">7.2</td>
    </tr>
  </tbody>
</table>

            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              *Car Prices Found Using Kelly Blue Book **Average Daily Rate Noted on Turo.com
            </p>
           
          </div>
          <div className="mt-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Lorepa Return on Investment
            </h2>
            <div className="overflow-x-auto">
            <table className="table-fixed border-collapse border border-slate-400 w-full text-gray-800">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border border-slate-300">New Trailer</th>
            <th className="p-4 border border-slate-300">Purchase Price*</th>
            <th className="p-4 border border-slate-300">Daily Rental Rate**</th>
            <th className="p-4 border border-slate-300">
              Extra monthly income earned if rented 6 days/mo
            </th>
            <th className="p-4 border border-slate-300">
              If rented 73 days per year (20%), it pays for itself in (years)
            </th>
          </tr>
        </thead>
        <tbody>
          {TrailerData.map((trailer, index) => (
            <tr key={index}>
              <td className="p-4 border border-slate-300">{trailer.model}</td>
              <td className="p-4 border border-slate-300">${trailer.price.toLocaleString()}</td>
              <td className="p-4 border border-slate-300">${trailer.rentalRate}</td>
              <td className="p-4 border border-slate-300">${trailer.extraIncome}</td>
              <td className="p-4 border border-slate-300">{trailer.roiYears}</td>
            </tr>
          ))}
        </tbody>
      </table>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              *Average Daily Rate Noted on Lorepa.ca            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComparison;
