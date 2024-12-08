import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const EquipmentDisplay = () => {
  const allEquipments = useLoaderData();
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
        All Sports Equipment
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Equipment Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allEquipments.map((equipment, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition duration-200`}
              >
                <td className="px-6 py-4 text-sm border-t">{index + 1}</td>
                <td className="px-6 py-4 text-sm font-medium border-t">
                  {equipment.itemName}
                </td>
                <td className="px-6 py-4 text-sm border-t">
                  {equipment.categoryName}
                </td>
                <td className="px-6 py-4 text-sm border-t">
                  {equipment.price}
                </td>
                <td className="px-6 py-4 text-sm border-t">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    value={equipment.rating}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </td>
                <td className="px-6 py-4 text-sm border-t">
                  <button className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 shadow-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipmentDisplay;
