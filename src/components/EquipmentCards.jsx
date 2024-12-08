import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const EquipmentCards = ({ equipmentList, setRender, render }) => {
    const hanleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                
                fetch(`https://equi-sports-server-chi.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        swal("Deleted!", "Your product has been deleted!", "success");
                        setRender(!render)
                    }else{
                        swal("Ooops!", "something went wrong");
                    }
                })
            }
          });
    }
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          My Equipment List
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentList.map((equipment, index) => (
            <Zoom key={equipment._id} delay={index * 100} >
                <div
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <img
                src={equipment?.photo}
                alt={equipment?.itemName}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {equipment.itemName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Category: {equipment.categoryName}
                </p>
                <p className="text-gray-800 dark:text-gray-300 font-semibold">
                  ${equipment.price}
                </p>
                <p className="text-sm text-yellow-500 font-medium">
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
                </p>
              </div>

              {/* Buttons */}
              <div className="p-4 flex justify-between items-center">

                <Link to={`/update-equipments/${equipment._id}`}>
                <button
                //   onClick={() => onUpdate(equipment.id)}
                  className="bg-green-500 text-white px-3 py-2 rounded-md shadow hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                >
                  Update
                </button>
                </Link>

                <button
                  onClick={() => hanleDelete(equipment._id)}
                  className="bg-red-500 text-white px-3 py-2 rounded-md shadow hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            </Zoom>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentCards;
