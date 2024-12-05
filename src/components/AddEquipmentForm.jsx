import React, { useState } from "react";
// import { toast } from "react-hot-toast";

const AddEquipmentForm = () => {
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    userEmail: "user@example.com", // Replace with logged-in user email
    userName: "John Doe", // Replace with logged-in user name
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add validation logic if necessary
    if (!formData.image || !formData.itemName || !formData.price) {
      toast.error("Please fill all the required fields!");
      return;
    }

    // Simulate form submission (replace with actual API call)
    console.log("Form submitted:", formData);
    toast.success("Equipment added successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Add New Equipment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="Enter the image URL"
            className="input input-bordered w-full"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        {/* Item Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input
            type="text"
            name="itemName"
            placeholder="Enter item name"
            className="input input-bordered w-full"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <select
            name="categoryName"
            className="select select-bordered w-full"
            value={formData.categoryName}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Select a category
            </option>
            <option>Cricket</option>
            <option>Football</option>
            <option>Swimming</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter a description"
            className="textarea textarea-bordered w-full"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price (USD)</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="input input-bordered w-full"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Rating */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <select
            name="rating"
            className="select select-bordered w-full"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Select rating
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 && "s"}
              </option>
            ))}
          </select>
        </div>

        {/* Customization */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Customization</span>
          </label>
          <input
            type="text"
            name="customization"
            placeholder="Enter customization options"
            className="input input-bordered w-full"
            value={formData.customization}
            onChange={handleChange}
          />
        </div>

        {/* Processing Time */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Processing Time</span>
          </label>
          <input
            type="text"
            name="processingTime"
            placeholder="Enter delivery time (e.g., 3-5 days)"
            className="input input-bordered w-full"
            value={formData.processingTime}
            onChange={handleChange}
          />
        </div>

        {/* Stock Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Stock Status</span>
          </label>
          <input
            type="number"
            name="stockStatus"
            placeholder="Enter stock quantity"
            className="input input-bordered w-full"
            value={formData.stockStatus}
            onChange={handleChange}
            required
          />
        </div>

        {/* User Info */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="email"
            name="userEmail"
            className="input input-bordered w-full"
            value={formData.userEmail}
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            name="userName"
            className="input input-bordered w-full"
            value={formData.userName}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipmentForm;
