import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const slides = [
    {
      image: "https://as1.ftcdn.net/v2/jpg/02/59/82/20/1000_F_259822053_WPeuyegBS9tJkaKULvIwuC3kEUmjcO3z.jpg",
      heading: "Gear Up for the Game",
      subheading: "Top-notch football gear for champions.",
      buttonText: "Shop Football Gear",
    },
    {
      image: "https://i.ibb.co.com/jkX4mgK/m010t0655-d-sale-banner-03mar23.jpg",
      heading: "Smash Boundaries",
      subheading: "Premium cricket accessories for pros.",
      buttonText: "Explore Cricket Gear",
    },
    {
      image: "https://i.ibb.co.com/mFD7Ht0/pexels-willpicturethis-1954524.jpg",
      heading: "Reach Your Peak",
      subheading: "High-quality gym equipment for fitness enthusiasts.",
      buttonText: "Browse Gym Equipment",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg md:text-xl mb-6">{slide.subheading}</p>
              <button className="px-6 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition duration-300">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
