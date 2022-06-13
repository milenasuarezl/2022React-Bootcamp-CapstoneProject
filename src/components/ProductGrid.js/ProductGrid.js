import Product from "../Product/Product";
import { Wrapper } from "./ProductGrid.styled";

const ProductGrid = (props) => {
    const { products} = props;
    return(<>
        <Wrapper>
        {
            products.map((product) => {
                return <Product key={product.id} data={product} />
            })
        }
        </Wrapper>
    </>)
}

export default ProductGrid;