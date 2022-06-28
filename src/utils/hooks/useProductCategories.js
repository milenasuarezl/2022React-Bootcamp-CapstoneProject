import Categories from "../../assets/mocks/en-us/product-categories.json";
import { mapBannerCategoryData } from "../utils"; 
import { useState, useEffect} from "react";

export function useProductCategories() {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        setCategories(mapBannerCategoryData(Categories));
    }, []);

    return categories;
} 