import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ViewDetails = () => {
  const [product, setProducts] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://equi-sports-server-chi.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  const {
    photo,
    categoryName,
    itemName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userName,
    userEmail,
  } = product;
  return (
    <div class="w-11/12 mx-auto p-5">
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold text-gray-800">
        Sports Gear Insights
        </h1>
        <p className="text-xl text-gray-600 mt-2">
        Discover every detail about your selected sports equipment.
        </p>
      </div>

      <div class="bg-gradient-to-r from-blue-400 to-indigo-400 shadow-xl rounded-lg p-8 flex flex-col md:flex-row gap-8 justify-between">
        <div class="flex-none w-full md:w-1/2">
          <img
            src={photo}
            alt={itemName}
            class="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div class="flex-grow">
          <h2 class="text-4xl font-semibold text-white">
            Item Name: {itemName}{" "}
          </h2>
          <p class="text-lg text-gray-200 mt-2">Category: {categoryName}</p>
          <p class="text-base text-gray-100 mt-4">{description}</p>

          <div class="mt-4">
            <p class="text-2xl font-bold text-green-400">${price}</p>
            <div class="flex mt-2">
              <span class="text-yellow-500">
                <ReactStars
                  count={5}
                  size={24}
                  isHalf={true}
                  value={rating}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </span>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-lg font-medium text-gray-100">
              Customization:{customization}
            </p>
            <div class="flex gap-4 mt-2">
              <input
                type="checkbox"
                id="extra-grip"
                name="extra-grip"
                class="text-blue-500"
              />
              <label for="extra-grip" class="text-gray-100">
                Extra Grip
              </label>
            </div>
            <div class="flex gap-4 mt-2">
              <input
                type="checkbox"
                id="hit-paper"
                name="hit-paper"
                class="text-blue-500"
              />
              <label for="hit-paper" class="text-gray-100">
                Hit Paper
              </label>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-lg text-gray-100">
              Stock Status:{" "}
              {stockStatus > 0 ? (
                <span class="text-green-500">In Stock</span>
              ) : (
                <span class="text-red-500">Out Of Stock</span>
              )}
            </p>
            <p class="text-base text-gray-300">
              Processing Time: {processingTime}
            </p>
          </div>

          <div class="mt-6 text-gray-200">
            <p>Added by: {userName}</p>
            <p>User Email: {userEmail}</p>
          </div>

          <button class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
