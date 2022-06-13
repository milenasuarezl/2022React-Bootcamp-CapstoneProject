import styled from "styled-components";

export const Figure = styled.figure`
    position: relative;
    margin: 0;
    margin-top: 1em;
`

export const Image = styled.img`
    width: 100%;
    height: auto;

    @media only screen and (min-width: 1200px) {
        width: ${props => props.width};
         height: ${props => props.height};
    }
`

export const FigureCaption = styled.figcaption`
    padding: 0.5em;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    color: #bbbcc3;
    font-size: 0.5em;

    @media only screen and (min-width: 1200px) {
        padding: 2rem;
        font-size: 1.4em;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
`

