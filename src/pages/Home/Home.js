import Slider from "../../components/Slider/Slider";
import Banners from "../../assets/mocks/en-us/featured-banners.json";
import Categories from "../../assets/mocks/en-us/product-categories.json";
import Products from "../../assets/mocks/en-us/featured-products.json";
import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import { SIMPLE_SLIDER, MULTIPLE_SLIDER } from '../../utils/constants'; 
import { mapBannerCategoryData, mapProducts } from "../../utils/utils";

const Home = (props) => {
    const banners = mapBannerCategoryData(Banners);
    const categories = mapBannerCategoryData(Categories);
    const products = mapProducts(Products, categories).slice(0, 4);

    return(<>
        <Slider slides={SIMPLE_SLIDER} source={banners}/>
        <h1>Categories</h1>
        <Slider slides={MULTIPLE_SLIDER} source={categories}/>
        <h1>Products</h1>
        <ProductGrid products={products}/>
        <button onClick={props.onClick}>View All products</button>
    </>)
}

export default Home;