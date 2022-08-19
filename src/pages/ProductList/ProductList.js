import ProductGrid from "../../components/ProductGrid.js/ProductGrid";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tags from "../../components/Tags/Tags";
import categories from "../../assets/mocks/en-us/product-categories.json";
import products from "../../assets/mocks/en-us/featured-products.json";
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/Modal/Modal";

import { Wrapper, FiltersDesktop, FiltersMobile, ProductContainer, ShowFilters } 
from "./ProductList.styled";
import { useEffect, useState } from "react";
import useModal from "../../utils/hooks/useModal";

const ProductList = () => {
    const [ categoryList, setCategoryList ] = useState(() => {
        return categories.results.map((category) => ({...category, checked: false}));
    });

    const [ productsFiltered, setProductsFiltered ] = useState(products);
    const [ filters, setFilters ] = useState([]);
    const [ isLoading, setLoading] = useState(true);

    const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();

    const filterProducts = () => {
        const newProducts = [];
        if (filters.length > 0) {
            products.results.forEach(product => {
                if (filters.some(filter => product.data.category.id === filter.id)) {
                    newProducts.push(product);
                }
            })
            setProductsFiltered({ ...productsFiltered, results: newProducts});
        } else {
            setProductsFiltered({ ...productsFiltered, results: products.results});
        }
    }

    useEffect(() => {
        filterProducts();
    }, [filters]);

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
    }

    const deleteFilter = (event) => {
        const { id } = event.target;
        setFilters((filters) => filters.filter(filter => filter.id !== id));
        updateCategoryList(id, false);
                                                              
    }

    return(<Wrapper>
                <ShowFilters onClick={toggleLoginForm}>
                    Show Filters
                </ShowFilters>

                <FiltersMobile>
                    <Modal 
                        isShowing={isLoginFormShowed}
                        hide={toggleLoginForm}
                        title="Filters"
                    >
                        <Tags filters={filters} onClick={deleteFilter}/>
                        <Sidebar data={categoryList} onChange={handleFilter}/>
                    </Modal>
                </FiltersMobile>
                
                <FiltersDesktop>
                    <Tags filters={filters} onClick={deleteFilter}/>
                    <Sidebar data={categoryList} onChange={handleFilter}/>
                </FiltersDesktop>

                <ProductContainer>
                    {
                        isLoading ? <Loading/> : <ProductGrid products={productsFiltered}/>
                    }
                </ProductContainer>
            </Wrapper>
    )
}

export default ProductList;