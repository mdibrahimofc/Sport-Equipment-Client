import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const MyEquipments = () => {
    const [myEquipments, setMyEquipments] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/my-equipments${user.email}`)
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setMyEquipments(data)
        })
    },[])
  return (
    <div>
      {myEquipments.map(eq => <div key={eq?._id} class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div class="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition ease-in-out">
          <img
            src={eq?.photo}
            alt="Equipment Image"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-xl text-gray-800">Football</h3>
            <p class="text-sm text-gray-600">Category: Sports Gear</p>
            <p class="text-lg text-green-600 font-bold">$29.99</p>
            <span class="inline-block bg-green-200 text-green-800 rounded-full text-xs px-3 py-1 mt-2">
              In Stock
            </span>
            <div class="flex justify-between mt-4">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Update
              </button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                onclick="confirmDelete()"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default MyEquipments;
