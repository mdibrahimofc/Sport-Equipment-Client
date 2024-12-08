import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

const ProductsSection = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/equipment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10">
      {loading && (
        <div className="flex justify-center items-center my-6">
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
          Featured Sports Accessories
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Explore our best picks for your favorite sports!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Zoom key={product._id} delay={index * 100} >
              <div
              className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold dark:text-white mt-4">{product.itemName}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                ${product.price}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span
                  className={`badge ${
                    product.stock > 0 ? "badge-success" : "badge-error"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
