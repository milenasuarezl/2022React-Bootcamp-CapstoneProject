import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import BannerCategory from "../BannerCategory/BannerCategory";

//import "swiper/css";

const Slider = (props) => {
    const { slides, source} = props;
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
      >
          {
              source.map((source) => {
                  return <SwiperSlide key={source.id}>
                          <BannerCategory key={source.id} data={source}/>
                      </SwiperSlide>
              })
          }
      </Swiper>
      );
}

export default Slider;