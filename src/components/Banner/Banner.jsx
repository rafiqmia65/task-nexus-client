import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/bannerImg1.png";
import image2 from "../../assets/bannerImage2.png";
import image3 from "../../assets/bannerImage3.png";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const slides = [
    {
      title: "Connect with Top Freelancers",
      subtitle: "Hire with confidence from a global talent pool.",
      description:
        "Discover and hire highly skilled professionals for any task on TaskNexus. Our platform makes the process fast, easy, and reliable—helping you connect with the right talent every time.",
      image: image1,
      ctaText: "Explore Freelancers",
    },
    {
      title: "Grow Your Career as a Freelancer",
      subtitle: "Work on projects that match your skills and passion.",
      description:
        "Join TaskNexus and gain access to consistent, high-quality projects from verified clients. Build lasting professional relationships and grow your freelance career with a platform designed to support your success.",
      image: image2,
      ctaText: "Start Earning",
    },
    {
      title: "Secure Payments. Seamless Communication.",
      subtitle: "We ensure every project runs smoothly and safely.",
      description:
        "Work confidently using TaskNexus’s powerful built-in tools that ensure secure payments, clear communication, and strong protection—giving both clients and freelancers the confidence to collaborate without worrying about risks.",
      image: image3,
      ctaText: "Learn How It Works",
    },
  ];

  return (
    <div className="">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="h-[70vh] rounded-lg overflow-hidden">
            <div
              className="relative w-full h-full flex flex-col items-center justify-center text-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* 🔵 Overlay with opacity */}
              <div className="absolute inset-0 bg-blue-900/40"></div>{" "}
              {/* Content goes above the overlay */}
              <div className="relative container px-3 mx-auto lg:px-0 z-10">
                <h2 className="text-2xl lg:text-4xl font-bold mb-5">
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="text-lg lg:text-2xl font-medium mb-5">
                    {slide.subtitle}
                  </p>
                )}
                <p className="text-sm lg:text-lg mb-5">{slide.description}</p>
                {slide.ctaText && (
                  <a className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white transition">
                    {slide.ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
