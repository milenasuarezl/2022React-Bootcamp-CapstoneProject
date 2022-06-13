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