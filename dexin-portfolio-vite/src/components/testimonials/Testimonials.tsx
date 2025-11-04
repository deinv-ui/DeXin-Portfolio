import { Component } from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  review: string;
  image: string;
}

const data: Testimonial[] = [
  { id: 1, name: "Advan Hune", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?", image: AVTR1 },
  { id: 2, name: "Advan Hune", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?", image: AVTR2 },
  { id: 3, name: "Advan Hune", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?", image: AVTR3 },
  { id: 4, name: "Advan Hune", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?", image: AVTR4 }
];

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="container testimonials__container"
        >
          {data.map(({ id, name, review, image }) => (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}

export default Testimonials;
