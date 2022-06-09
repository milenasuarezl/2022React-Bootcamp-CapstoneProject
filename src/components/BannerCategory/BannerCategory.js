import { Figure, FigureCaption, Image, Section  } from "./BannerCategory.styled"; 

const BannerCategory = (props) => {
    const { link, name, imageUrl, dimensions, alt } = props.data;
    const { width, height } = dimensions;

    return(<Section>
                <Figure>
                    <Image 
                        width={width}
                        height={height}
                        src={imageUrl} 
                        alt={alt} 
                        href={link} 
                        target="_blank" 
                    />
                    <FigureCaption>{name}</FigureCaption>
                </Figure>
            </Section>
    )
}

export default BannerCategory;