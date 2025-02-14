import styled from "styled-components";

export const Loader = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Blue */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;

    @keyframes spinner {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
    }
  }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
`