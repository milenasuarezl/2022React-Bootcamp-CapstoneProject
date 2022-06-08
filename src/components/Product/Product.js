const Product = (props) => {
    const {imageUrl, name, alt, link, categoryName, price, dimensions} = props.data;
    return (<section>
            <figure>
                <img src={imageUrl} alt={alt} href={link} target="_blank"/>
                <figcaption>{name}</figcaption>
            </figure>
            <div>
                <p>{price}</p>
                <p>{categoryName}</p>
            </div>
        </section>
    )
}

export default Product;