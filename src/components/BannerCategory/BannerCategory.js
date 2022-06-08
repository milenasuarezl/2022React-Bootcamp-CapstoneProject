const BannerCategory = (props) => {
    const { link, name, imageUrl, dimensions, alt } = props.data;
    return(<>
        <figure >
            <img src={imageUrl} alt={alt} href={link} target="_blank"/>
            <figcaption>{name}</figcaption>
        </figure>
    </>)
}

export default BannerCategory;