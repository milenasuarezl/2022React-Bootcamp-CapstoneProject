export const mapBannerCategoryData = (source) => { 
    return source?.results?.map((resource) => {
        const { id, href, data } = resource;
        const { main_image } = data;
        const { alt, url, dimensions } = main_image;
        return {
            id,
            link: href,
            name: data?.title || data?.name,
            imageUrl: url,
            dimensions,
            alt,
        }
    })
};

export const mapProducts = (products, categories) => {
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