import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
   
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      flex-direction: row ;
      justify-content: space-between;
      margin-top: 1rem;
    }
`

export const SearchInput = styled.input`
    font-size: 1rem;
    height: 1.5rem; 
    margin-right: 1em;
    width: 60%;
`

export const Img = styled.img`
    width: 24px;
    height: 27px;
`

export const WrapperActions = styled.div`
    display: flex;
    align-items: center;
`