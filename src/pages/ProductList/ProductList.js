import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tags from "../../components/Tags/Tags";
import { Wrapper, Div, ProductContainer } from "./ProductList.styled";
import { useEffect, useState } from "react";
//import { useProductCategories } from "../../utils/hooks/useProductCategories";
// import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

import categories from "../../assets/mocks/en-us/product-categories.json";
import products from "../../assets/mocks/en-us/featured-products.json";
import Loading from "../../components/Loading/Loading";

const ProductList = (props) => {
    //const categories = useProductCategories();
    //const products = useFeaturedProducts(categories.results);

    const [ categoryList, setCategoryList ] = useState(() => {
        return categories.results.map((category) => ({...category, checked: false}));
    });

    //const [ categoryList, setCategoryList ] = useState([]);

    const [ productsFiltered, setProductsFiltered ] = useState(products);
    const [ filters, setFilters ] = useState([]);
    const [ isLoading, setLoading] = useState(true);

    /*useEffect(() => {
        setCategoryList((prev) => {
            console.log('otrrrr', categories)
            return categories;
        })
    }, [categories])*/


    useEffect(()=> {
        setTimeout(() => {
            setLoading(false);
          }, 2000);
    }, [])

    const updateCategoryList = (id, checked) => {
        let index = categoryList.findIndex((category) => category.id === id);
        categoryList[index].checked = checked; 
        setCategoryList(categoryList);
    }

    const handleFilter = (event) => {
        const { id, name, checked } = event.target;
        updateCategoryList(id, checked)

        if (checked) {
            addFilter(id, name, checked);
        } else {
            deleteFilter(event);
        }
    }

    const addFilter = (id, name, checked) => {
        setFilters(filters.concat({ id, name, checked}));
        setFilters((previousFilters) => {
            setProductsFiltered(filterProducts(id));
            return previousFilters;
        })
    }

    const filterProducts = (categoryId) => {
        let newProducts = products.results.filter(({data}) => (data.category.id === categoryId));
        return {...productsFiltered, results: newProducts};
    }

    const deleteFilter = (event) => {
        const { id } = event.target;
        setFilters(filters.filter(filter => filter.id !== id));
        setProductsFiltered(filterProducts(id));
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