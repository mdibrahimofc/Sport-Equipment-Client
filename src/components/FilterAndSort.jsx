import React from "react";

const FilterAndSort = () => {
  const handleSort = (e)=> {
    e.preventDefault()
    const form = e.target
    const price = form.price.value;
    console.log(price);
    // const sport = form.sport.value;
    // const filter = {price, sport}
    if(price === "low-to-high"){
      fetch("https://equi-sports-server-chi.vercel.app/filter/ascending")
    .then(res=> res.json())
    .then(data=> {
      console.log(data);
    })
    }
  }
  return (
    <form onSubmit={handleSort} class="bg-gray-100 p-4 rounded-lg shadow-md flex flex-wrap items-center justify-between gap-4">
      <div class="w-full md:w-1/3">
        <input
          type="text"
          name="search"
          placeholder="Search for gear or categories..."
          class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* <div class="w-full md:w-1/4">
        <select name="sport" class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Filter by Sport</option>
          <option value="football">Football</option>
          <option value="cricket">Cricket</option>
          <option value="tennis">Tennis</option>
          <option value="basketball">Basketball</option>
          <option value="swimming">Swimming</option>
        </select>
      </div> */}

      <div class="w-full md:w-1/4">
        <select name="price" class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option value="">Sort by Price</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div class="w-full md:w-auto">
        <button type="submit" class="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default FilterAndSort;
