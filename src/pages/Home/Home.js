import Slider from "../../components/Slider/Slider";
import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import { SIMPLE_SLIDER, MULTIPLE_SLIDER } from '../../utils/constants'; 
import { useFeaturedBanner } from "../../utils/hooks/useFeaturedBanner";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

const Home = (props) => {
    const banners = useFeaturedBanner();
    const categories = useProductCategories();
    const products = useFeaturedProducts(categories).slice(0, 4);

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