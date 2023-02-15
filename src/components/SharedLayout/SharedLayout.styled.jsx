import styled from '@emotion/styled';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  background-color: ${p => p.theme.colors.bcgPrim};  
`;
