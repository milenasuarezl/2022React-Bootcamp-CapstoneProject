import styled from "styled-components";

export const ModalOverlay = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1040;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    display: flex;
    align-items: center;
`
export const ModalBox = styled.div`
    z-index: 2;
    background: #ffffff;
    position: relative;
    margin: auto;
    border-radius: 5px;
    width: 80%;
    padding: 0 1rem;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ModalCloseButton = styled.button`
    font-size: 1.4rem;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    border: none;
    background: transparent;
`
