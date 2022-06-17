import Banners from "../../assets/mocks/en-us/featured-banners.json";
import { mapBannerCategoryData } from "../utils"; 
import { useState, useEffect} from "react";

export function useFeaturedBanner() {
    const [ banners, setBanners ] = useState([]);

    useEffect(() => {
        setBanners(mapBannerCategoryData(Banners));
    }, []);

    return banners;
} 