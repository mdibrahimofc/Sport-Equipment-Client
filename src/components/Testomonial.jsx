import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ansel Rivers",
      feedback:
        "The Basketball Pro Gear is outstanding! I feel more confident on the court.",
      image: "https://i.ibb.co/0XJqs1f/man-6839054-1920.jpg",
      role: "Basketball Player",
    },
    {
      name: "Isolde Grant",
      feedback:
        "The Archery Equipment exceeded my expectations. Precision and quality are unmatched!",
      image: "https://i.ibb.co/MCQ7qXR/man-3803551-1920.jpg",
      role: "Archer",
    },
    {
      name: "Thaddeus Blair",
      feedback:
        "The Running Shoes are incredibly comfortable and have improved my performance.",
      image: "https://i.ibb.co/3k4LdDm/man-6339003-1920.jpg",
      role: "Marathon Runner",
    },
    {
      name: "Eowyn Hart",
      feedback:
        "Fantastic service and the Swimming Gear fits perfectly. Highly satisfied!",
      image: "https://i.ibb.co/MCQ7qXR/man-3803551-1920.jpg",
      role: "Swimmer",
    },
    {
      name: "Leocadia Finch",
      feedback:
        "The Badminton Racket is lightweight and perfectly balanced. An amazing buy!",
      image: "https://i.ibb.co/3k4LdDm/man-6339003-1920.jpg",
      role: "Badminton Enthusiast",
    },
    {
      name: "Dorian Vale",
      feedback:
        "The Hiking Equipment is sturdy and reliable. Perfect for my mountain adventures!",
      image: "https://i.ibb.co/0XJqs1f/man-6839054-1920.jpg",
      role: "Hiker",
    },
  ];
  
  
  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              {/* Decorative Quote */}
              <div className="absolute top-0 left-0 transform -translate-y-6 translate-x-6 text-6xl text-gray-300 dark:text-gray-700">
                &ldquo;
              </div>

              {/* Testimonial Content */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-300 dark:border-gray-700"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
