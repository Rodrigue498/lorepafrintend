import React, { useState } from "react";

export default function ManageNews({user}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const newsData = [
    { name: "Morning in the Northern sea", category: "Sea Travel", date: "01/30/2025" },
    { name: "America National Parks with Denver", category: "Sea Travel", date: "01/30/2025" },
    { name: "A Seaside Reset in Laguna Beach", category: "Ecotourism", date: "01/30/2025" },
    { name: "Tiptoe through the Tulips of Washington", category: "Adventure Travel", date: "01/30/2025" },
    { name: "City Spotlight: Philadelphia", category: "Adventure Travel", date: "01/30/2025" },
    { name: "All Aboard the Rocky Mountaineer", category: "Ecotourism", date: "01/30/2025" },
    { name: "Pure Luxe in Punta Mita", category: "Hosted Tour", date: "01/30/2025" },
    { name: "The day on Paris", category: "Sea Travel", date: "01/30/2025" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage News</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add News
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-4">
          <select
            className="border-gray-300 rounded px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- All Categories --</option>
            <option value="Sea Travel">Sea Travel</option>
            <option value="Ecotourism">Ecotourism</option>
            <option value="Adventure Travel">Adventure Travel</option>
            <option value="Hosted Tour">Hosted Tour</option>
          </select>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-gray-300 rounded px-3 py-2 w-full"
          />
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
            Search News
          </button>
        </div>

        {/* Bulk Actions */}
        <div className="flex items-center gap-4 mb-4">
          <select className="border-gray-300 rounded px-3 py-2">
            <option>Bulk Actions</option>
            <option>Delete Selected</option>
            <option>Mark as Published</option>
          </select>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
            Apply
          </button>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsData
              .filter(
                (news) =>
                  news.name.toLowerCase().includes(search.toLowerCase()) &&
                  (category === "" || news.category === category)
              )
              .map((news, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{news.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{news.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{news.date}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                      Publish
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <p className="text-sm mt-4">{newsData.length} items found</p>
      </div>
    </div>
  );
}
