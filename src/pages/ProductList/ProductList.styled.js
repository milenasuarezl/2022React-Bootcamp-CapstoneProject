import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const FiltersMobile = styled.div`
    display: block;
    width: 100%;

    @media (min-width: 768px) {
        display: none;
    }
`

export const FiltersDesktop = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        width: 16%;
        padding-right: 1.5rem;
    }
`

export const ShowFilters = styled.button`
    display: block;
    margin-bottom: 1rem;
    background-color: #2b76a1;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    font-weight: 600;
    border-radius: 5px;
    color: white;
    margin-top: 0.5rem;
    margin-right: 0.5rem;

    @media (min-width: 768px) {
        display: none;
    }
`

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }
`