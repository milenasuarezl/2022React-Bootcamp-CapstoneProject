import styled from "styled-components";

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
    font-weight: bold;

    @media only screen and (min-width: 1200px) {
        font-size: 0.5em;
    }
`

export const Wrapper = styled.section`
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   margin-top: 2rem;
   margin-right: 18px ;
` 

