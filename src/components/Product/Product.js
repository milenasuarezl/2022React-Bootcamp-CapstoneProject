import { Figure, FigureCaption, Image, Div, Wrapper  } from "./Product.styled"; 

const Product = (props) => {
    const {imageUrl, name, alt, link, categoryName, price, dimensions} = props.data;
    const { width, height } = dimensions;

    return (<Wrapper>
                <Figure>
                    <Image 
                        width={width}
                        height={height}
                        src={imageUrl} 
                        alt={alt} 
                        href={link} 
                        target="_blank" 
                    />
                    <FigureCaption>{categoryName}</FigureCaption>
                </Figure>
                <Div>
                    <p>{name}</p>
                    <p>${price}</p>
                </Div>
            </Wrapper>
    )
}

export default Product;