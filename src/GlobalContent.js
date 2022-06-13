import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`

export default function GlobalContent({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}