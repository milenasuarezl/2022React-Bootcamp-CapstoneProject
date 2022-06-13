import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import Categories from "../../assets/mocks/en-us/product-categories.json";
import Products from "../../assets/mocks/en-us/featured-products.json";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tags from "../../components/Tags/Tags";
import { Wrapper, Div } from "./ProductList.styled";
import { mapBannerCategoryData, mapProducts } from "../../utils/utils";

const ProductList = (props) => {
    const categories = mapBannerCategoryData(Categories);
    const products = mapProducts(Products, categories);

    return(<Wrapper>
                <Div>
                    <Tags/>
                    <Sidebar data={categories}/>
                </Div>
                <ProductGrid products={products}/>
            </Wrapper>
    )
}

export default ProductList;