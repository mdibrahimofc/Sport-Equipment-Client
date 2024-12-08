import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import swal from "sweetalert";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateEquipments = () => {
  const {user} = useContext(AuthContext)
    const {id} = useParams()
    
    const AllEquipments = useLoaderData()
    const requireProducts = AllEquipments.find(e => e._id === id)

    const {photo, categoryName, itemName, description, price, rating, customization, processingTime, stockStatus, userName, userEmail} = requireProducts

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const itemName = form.itemName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime =form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const categoryName = form.categoryName.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const newEquipment = {photo, categoryName, itemName, description, price, rating, customization, processingTime, stockStatus, userName, userEmail};
        fetch(`http://localhost:5000/update/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newEquipment)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      swal("Product updated successfully")
      form.reset()
    })
    .catch(err=> swal("Ooopss! something wrong, products doesn't add"))
      };
  return (
    <div className="my-8">
      <p className="text-center text-cyan-500 text-2xl md:text-3xl lg:text-4xl font-bold">
      Update Your <br /> Sports Equipment
      </p>
      <p className="text-sky-400 text-center my-2 md:text-2xl font-semibold">
      Make changes to your product details and keep your inventory up-to-date effortlessly.
      </p>
      <div className="w-4/5 mx-auto p-6 bg-base-200 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Add New Equipment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter the image URL"
              className="input input-bordered w-full"
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
              defaultValue={itemName}
              placeholder="Enter item name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Category Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              name="categoryName"
              defaultValue={categoryName}
              placeholder="Enter category name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Enter a description"
              className="textarea textarea-bordered w-full"
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
              defaultValue={price}
              placeholder="Enter price"
              className="input input-bordered w-full"
            />
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <select
              name="rating"
              defaultValue={rating}
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select rating
              </option>
              {[1, 2, 3, 3.3, 3.5, 3.7, 3.9, 4, 4.2, 4.3, 4.4, 4.5, 5].map((num) => (
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
              defaultValue={customization}
              placeholder="Enter customization options"
              className="input input-bordered w-full"
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
              defaultValue={processingTime}
              placeholder="Enter delivery time (e.g., 3-5 days)"
              className="input input-bordered w-full"
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
              defaultValue={stockStatus}
              placeholder="Enter stock quantity"
              className="input input-bordered w-full"
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
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6 col-span-2">
            <input className="btn btn-primary hover:bg-blue-700" value={'Add Equipment'} type="submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipments;
