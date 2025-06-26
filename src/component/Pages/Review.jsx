import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "John Doe",
    message: "FreelanceNation helped me find my first client. Very easy to use!",
    image: "https://i.ibb.co/9kNqP0tK/pexels-zhuhehuai-716276.jpg",
    role: "Frontend Developer",
  },
  {
    name: "Ayesha Rahman",
    message: "Best platform for Bangladeshi freelancers. Loved the UI & UX!",
    image: "https://i.ibb.co/M0Jc65r/pexels-marc-schulte-656598-2952834.jpg",
    role: "Content Writer",
  },
  {
    name: "Tanvir Hossain",
    message: "Thanks to FreelanceNation, I’ve completed 10+ freelance projects!",
    image: "https://i.ibb.co/35CmHzsX/pexels-icsa-833425-1709003.jpg",
    role: "UI/UX Designer",
  },
];

const ReviewCarousel = () => {
  return (
    <section className="py-16 bg-base-200 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Users Say</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="max-w-3xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-100 p-8 rounded-xl shadow-md text-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-lg italic mb-4">“{review.message}”</p>
              <h4 className="text-xl font-semibold">{review.name}</h4>
              <span className="text-sm">{review.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewCarousel;
