import Slider from "../../components/Slider/Slider"; 
import Banners from "../../assets/mocks/en-us/featured-banners.json";
import Categories from "../../assets/mocks/en-us/product-categories.json";
import { SIMPLE_SLIDER, MULTIPLE_SLIDER } from '../../utils/constants'; 

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
        <Slider slides={SIMPLE_SLIDER} source={banners}/>
        <Slider slides={MULTIPLE_SLIDER} source={categories}/>
    </>)
}

export default Home;