import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import Testimonials from "./Testimonials";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import AvatarAnisha from "./../../assets/avatar-anisha.png";
import AvatarAli from "./../../assets/avatar-ali.png";
import AvatarRichard from "./../../assets/avatar-richard.png";
import AvatarShanai from "./../../assets/avatar-shanai.png";

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      className="cursor-move"
    >
      <SwiperSlide className="pt-[2.28125rem]">
        <Testimonials image={AvatarAnisha} name="Anisha Li">
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone
          motivated.”
        </Testimonials>
      </SwiperSlide>
      <SwiperSlide className="pt-[2.28125rem]">
        <Testimonials image={AvatarAli} name="Ali Bravo">
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </Testimonials>
      </SwiperSlide>
      <SwiperSlide className="pt-[2.28125rem]">
        <Testimonials image={AvatarRichard} name="Richard Watts">
          “Manage allows us to provide structure and process. It keeps us
          organized and focused. I can’t stop recommending them to everyone I
          talk to!”
        </Testimonials>
      </SwiperSlide>
      <SwiperSlide className="pt-[2.28125rem]">
        <Testimonials image={AvatarShanai} name="Shanai Gough">
          “Their software allows us to track, manage and collaborate on our
          projects from anywhere. It keeps the whole team in-sync without being
          intrusive.”
        </Testimonials>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
