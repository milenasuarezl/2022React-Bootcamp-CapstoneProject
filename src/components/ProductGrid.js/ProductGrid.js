import Product from "../Product/Product";
import { Container, Grid } from "./ProductGrid.styled";
import categories from "../../assets/mocks/en-us/product-categories.json"
import Pagination from "../Pagination/Pagination";

const ProductGrid = ({products}) => {
    return(<>
        {
            products.results && products.results.length > 0 
            ? <Container>
                <Grid>
                    {
                        products.results.map(({id, data}) => {
                            const { id: categoryId} = data.category;
                            let category = categories.results?.find((cat) => categoryId=== cat.id);
                            let { name } = category.data;
                            return <div key={id}>
                                        <label>{name}</label>
                                        <Product key={id} data={data} />
                                    </div>
                        }) 
                    }
                </Grid>
                <Pagination totalPages={products.total_pages}/>
              </Container>
            :<label>There are no products</label>
        }
    </>)
}

export default ProductGrid;