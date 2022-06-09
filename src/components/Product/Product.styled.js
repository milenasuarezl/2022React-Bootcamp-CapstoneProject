import styled from "styled-components";

export const Figure = styled.figure`
    margin: 0 auto;
    text-align: center;
    position: relative ;
`

export const Image = styled.img`
    width: 100%;
    height: auto;

    @media only screen and (min-width: 1200px) {
        width: ${props => props.width};
        height: ${props => props.height};
    }
`

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1.3em;
    font-family: fantasy;

    @media only screen and (min-width: 1200px) {
        font-size: 0.5em;
    }
`

export const FigureCaption = styled.figcaption`
    position: absolute ;
    padding: 2rem;
    top: 0;
    left: 0;
    font-weight: bold;
`

export const Wrapper = styled.section`
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   margin-top: 2rem;
   margin-right: 18px ;
` 

