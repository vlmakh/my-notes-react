import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'
import { fadeIn } from 'react-animations'

const fadeInA = keyframes`${fadeIn}`

export const Overlay = styled.div`
  position: fixed;
  padding-top: 8px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  animation: ${fadeInA} 500ms;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
