import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

//import "swiper/css";

const Slider = (props) => {
    const { slides, children} = props;
    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={slides}
        >
          <SwiperSlide>{children}</SwiperSlide>
        </Swiper>
      );
}

export default Slider;