import Slider from "../../components/Slider/Slider"; 
import Banners from "../../assets/mocks/en-us/featured-banners.json";
import Categories from "../../assets/mocks/en-us/product-categories.json";
import { SIMPLE_SLIDER, MULTIPLE_SLIDER } from '../../utils/constants'; 
import BannerCategory from "../../components/BannerCategory/BannerCategory";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Home = () => {
    const mapBannerCategoryData = (source) => { 
        return source?.results?.map((resource) => {
            const { id, href, data } = resource;
            const { alt, url, dimensions } = data.main_image;
            return {
                id,
                link: href,
                name: data?.title || data?.name,
                imageUrl: url,
                dimensions,
                alt,
            }
        })
    };

    const banners = mapBannerCategoryData(Banners);
    const categories = mapBannerCategoryData(Categories);

    return(<>
        <Swiper
          spaceBetween={50}
          slidesPerView={SIMPLE_SLIDER}
        >
            {
                banners.map((banner) => {
                    return <>
                        <SwiperSlide>
                            <BannerCategory key={banner.id} data={banner}/>
                        </SwiperSlide>
                    </>
                })
            }
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={MULTIPLE_SLIDER}
        >
            {
                categories.map((category) => {
                    return <>
                        <SwiperSlide>
                            <BannerCategory key={category.id} data={category}/>
                        </SwiperSlide>
                    </>
                })
            }
        </Swiper>
    </>)
}

export default Home;