import React from "react";

const SportsBlog = () => {
    const blogPosts = [
        {
          title: "Top 10 Football Drills You Should Try at Home",
          excerpt: "Improve your football skills with these 10 easy and effective drills you can do from the comfort of your home.",
          image: "https://i.ibb.co.com/jRvSCmM/bleachers-1867992-1920.jpg",
          date: "October 5, 2024",
          author: "John Doe",
          link: "/blog/football-drills",
        },
        {
          title: "How to Choose the Right Running Shoes for Maximum Comfort",
          excerpt: "Choosing the right running shoes can make a world of difference. Here's a comprehensive guide for selecting the perfect pair.",
          image: "https://i.ibb.co.com/q7mnpg1/feet-1840619-1920.jpg",
          date: "October 12, 2024",
          author: "Jane Smith",
          link: "/blog/running-shoes-guide",
        },
        {
          title: "Best Practices for Maintaining Your Tennis Equipment",
          excerpt: "Keep your tennis gear in top shape with these simple maintenance tips that will extend the life of your equipment.",
          image: "https://i.ibb.co.com/s9YJXYr/tennis-2086224-1920.jpg",
          date: "October 15, 2024",
          author: "Samantha Lee",
          link: "/blog/tennis-maintenance",
        },
        {
          title: "5 Simple Tips to Improve Your Basketball Shooting",
          excerpt: "Master the art of shooting with these easy-to-follow tips that will boost your accuracy and confidence on the court.",
          image: "https://i.ibb.co.com/5sfMZDh/action-1869428-1920.jpg",
          date: "October 20, 2024",
          author: "Michael Brown",
          link: "/blog/basketball-shooting",
        },
        {
          title: "How to Build Endurance for Long-Distance Running",
          excerpt: "Discover effective strategies and tips to build your stamina and endurance for running long distances without exhaustion.",
          image: "https://i.ibb.co.com/9c3GrSD/man-8293794-1920.jpg",
          date: "October 25, 2024",
          author: "David Harris",
          link: "/blog/endurance-running",
        },
        {
          title: "Stretching Routines to Boost Your Athletic Performance",
          excerpt: "Maximize your athletic performance with these pre- and post-workout stretching routines that enhance flexibility and reduce injury.",
          image: "https://i.ibb.co.com/QPf91yj/pexels-pavel-danilyuk-6295710.jpg",
          date: "October 30, 2024",
          author: "Emily Johnson",
          link: "/blog/stretching-routines",
        },
      ];
      
      
      
      

  return (
    <div className="bg-gray-100">
      <section className="py-12 w-10/12 mx-auto bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Sports Tips & Blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Explore expert insights, tutorials, and tips for athletes of all
            levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-56 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <button
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SportsBlog;
