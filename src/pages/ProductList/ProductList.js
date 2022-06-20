import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tags from "../../components/Tags/Tags";
import { Wrapper, Div, ProductContainer } from "./ProductList.styled";
import { useEffect, useState } from "react";
// import { useProductCategories } from "../../utils/hooks/useProductCategories";
// import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

import categories from "../../assets/mocks/en-us/product-categories.json";
import products from "../../assets/mocks/en-us/featured-products.json";
import Loading from "../../components/Loading/Loading";

const ProductList = (props) => {
   // const categories = useProductCategories();
    //const products = useFeaturedProducts(categories.results);

    const [ categoryList, setCategoryList ] = useState(() => {
        return categories.results.map((category) => ({...category, checked: false}));
    });

    const [ productsFiltered, setProductsFiltered ] = useState(products);
    const [ filters, setFilters ] = useState([]);
    const [ isLoading, setLoading] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
            setLoading(false);
          }, 2000);
    }, [])


    useEffect(() => {
    }, [filters])


    const handleFilter = (event) => {
        const { id, name, checked } = event.target;
        updateCategoryList(id, checked)

        if (checked) {
            setFilters(filters.concat({ id, name, checked}));
            setProductsFiltered(filterProducts(id));
        } else {
            deleteFilter(event);
        }
    }

    const updateCategoryList = (id, checked) => {
        let index = categoryList.findIndex((category) => category.id === id);
        categoryList[index].checked = checked; 
        setCategoryList(categoryList);
    }

    const filterProducts = (categoryId) => {
        let newProducts = products.results.filter(({data}) => (data.category.id === categoryId));
        return {...productsFiltered, results: newProducts};
    }

    const deleteFilter = (event) => {
        const { id } = event.target;
        const index = filters.findIndex(({ categoryId }) => categoryId === id);
        setFilters(filters.splice(index, 1));
    }

    return(<Wrapper>
                <Div>
                    <Tags filters={filters} onClick={deleteFilter}/>
                    <Sidebar data={categoryList} onChange={handleFilter}/>
                </Div>
                <ProductContainer>
                    {
                        isLoading ? <Loading/> : <ProductGrid products={productsFiltered}/>
                    }
                </ProductContainer>
            </Wrapper>
    )
}

export default ProductList;