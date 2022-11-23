import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import Testimonials, { TestimonialsProps } from "./Testimonials";
import AvatarAnisha from "./../../assets/avatar-anisha.png";
import AvatarAli from "./../../assets/avatar-ali.png";
import AvatarRichard from "./../../assets/avatar-richard.png";
import AvatarShanai from "./../../assets/avatar-shanai.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";

const testimonials: TestimonialsProps[] = [
  {
    image: AvatarAnisha,
    name: "Anisha Li",
    text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    image: AvatarAli,
    name: "Ali Bravo",
    text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    image: AvatarRichard,
    name: "Richard Watts",
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    image: AvatarShanai,
    name: "Shanai Gough",
    text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      className="cursor-move"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide className="pt-[2.28125rem]">
          <Testimonials
            image={testimonial.image}
            name={testimonial.name}
            text={testimonial.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
