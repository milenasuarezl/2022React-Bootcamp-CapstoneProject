import Slider from "../../components/Slider/Slider";
import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import { SIMPLE_SLIDER, MULTIPLE_SLIDER } from '../../utils/constants'; 
import { useFeaturedBanner } from "../../utils/hooks/useFeaturedBanner";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
//import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import products from "../../assets/mocks/en-us/featured-products.json";
import { Button, Div } from "./Home.styled";

const Home = (props) => {
    const banners = useFeaturedBanner();
    const categories = useProductCategories();
    // const products = useFeaturedProducts(categories);

    return(<>
        <Slider slides={SIMPLE_SLIDER} source={banners}/>
        <h1>Categories</h1>
        <Slider slides={MULTIPLE_SLIDER} source={categories}/>
        <h1>Products</h1>
        <ProductGrid products={products}/>
        <Div>
            <Button onClick={props.onClick}>View All products</Button>
        </Div>
    </>)
}

export default Home;