import Slider from "../../components/Slider/Slider";
import Banners from "../../assets/mocks/en-us/featured-banners.json";
import Categories from "../../assets/mocks/en-us/product-categories.json";
import Products from "../../assets/mocks/en-us/featured-products.json";
import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import { SIMPLE_SLIDER, MULTIPLE_SLIDER } from '../../utils/constants'; 
import { mapBannerCategoryData } from "../../utils/utils";

const mapProducts = (products, categories) => {
    return products?.results?.map((resource) => {
        const { id, href, data } = resource;
        const { name, category, mainimage, price } = data;
        const { alt, url, dimensions } = mainimage;
        const categoryName = categories?.find(({id}) => id === category.id)?.name;

        return {
            id,
            link: href,
            name: name,
            imageUrl: url,
            dimensions,
            alt,
            price,
            categoryName,
        }
    })
};

const Home = (props) => {
    const banners = mapBannerCategoryData(Banners);
    const categories = mapBannerCategoryData(Categories);
    const products = mapProducts(Products, categories);

    return(<>
        <Slider slides={SIMPLE_SLIDER} source={banners}/>
        <h1>Categories</h1>
        <Slider slides={MULTIPLE_SLIDER} source={categories}/>
        <h1>Products</h1>
        <ProductGrid products={products}/>
        <button  onClick={props.onClick}>View All products</button>
    </>)
}

export default Home;