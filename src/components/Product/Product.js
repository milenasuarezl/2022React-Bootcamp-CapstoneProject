import { Image, Div, Wrapper  } from "./Product.styled"; 

const Product = ({data}) => {
    const {name, mainimage, price} = data;
    const { alt,  url, dimensions } = mainimage;
    const { width, height } = dimensions;

    return (<Wrapper>
                <Image 
                    width={width}
                    height={height}
                    src={url} 
                    alt={alt} 
                    target="_blank" 
                />
                <Div>
                    <p>{name}</p>
                    <p>${price}</p>
                </Div>
            </Wrapper>
    )
}

export default Product;