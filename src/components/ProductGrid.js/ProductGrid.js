import Product from "../Product/Product";

const ProductGrid = (props) => {
    const { products} = props;

    return(<>
        {
            products.map((product) => {
                return <Product key={product.id} data={product} />
            })
        }
    </>)
}

export default ProductGrid;