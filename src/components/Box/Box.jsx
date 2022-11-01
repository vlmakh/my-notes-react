import styled from '@emotion/styled';
import { typography, space, color, layout, border } from 'styled-system';

export const Box = styled('div')(typography, space, color, layout, border);

export const BoxMain = styled.div`
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  margin: 20px auto 0;

  width: 300px;
  border: 1px solid grey;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
`;
