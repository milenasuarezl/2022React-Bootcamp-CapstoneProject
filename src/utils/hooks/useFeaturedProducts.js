import Products from "../../assets/mocks/en-us/featured-products.json";
import { useState, useEffect } from "react";


export function useFeaturedProducts(categories) {
    const [ products, setProducts ] = useState([]);

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


    useEffect(() => {
        setProducts(mapProducts(Products, categories));
    }, [categories]);

    return products;
} 