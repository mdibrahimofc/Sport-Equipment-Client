import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import swal from "sweetalert";
import { Fade, Slide } from "react-awesome-reveal";


const AddEquipments = () => {
  const {user} = useContext(AuthContext)
    console.log(user);
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
        fetch('http://localhost:5000/add-equipments', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newEquipment)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      swal("Product added successfully")
      form.reset()
    })
    .catch(err=> swal("Ooopss! something wrong, products doesn't add"))
      };
  return (
    <div className="my-8">
      <p className="text-center text-cyan-500 text-2xl md:text-3xl lg:text-4xl font-bold">
        Add New <br />
        Sports Equipment
      </p>
      <p className="text-sky-400 text-center my-2 md:text-2xl font-semibold">
        Enter the Details to Add a New Sports Equipment to the Store
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
              placeholder="Enter the image URL"
              className="input input-bordered w-full"
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
              required
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
              placeholder="Enter category name"
              className="input input-bordered w-full"
              required
            />
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
              required
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
              placeholder="Enter stock quantity"
              className="input input-bordered w-full"
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

export default AddEquipments;
