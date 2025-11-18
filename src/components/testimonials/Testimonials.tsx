import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination  from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

interface Testimonial {
  id: number;
  name: string;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR1,
  },
  {
    id: 2,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR2,
  },
  {
    id: 3,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR3,
  },
  {
    id: 4,
    name: "Advan Hune",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
    image: AVTR4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 px-4 md:px-12">
      <h5 className="text-xl text-gray-400 text-center">Review from clients</h5>
      <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="max-w-2xl mx-auto"
      >
        {testimonials.map(({ id, name, review, image }) => (
          <SwiperSlide
            key={id}
            className="bg-gray-800 rounded-2xl p-8 text-center select-none"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-600">
              <img src={image} alt={name} className="object-cover w-full h-full" />
            </div>
            <h5 className="text-lg font-semibold text-white">{name}</h5>
            <p className="text-gray-300 text-sm mt-2">{review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
