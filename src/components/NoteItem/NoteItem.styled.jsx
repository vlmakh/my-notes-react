import styled from '@emotion/styled';
import { fadeInAnim } from 'utils/animate';

export const NoteBoxOuter = styled.div`
  position: relative;
  cursor: ${p => (p.draggable ? 'grab' : 'default')};
`;

export const NoteBoxInner = styled.div`
  background-color: white;
  max-width: 360px;
  margin-bottom: 8px;
  border: 1px solid grey;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.box};

  animation: ${fadeInAnim} 500ms;
`;

export const NoteName = styled.h2`
  font-size: 16px;
`;

export const EditBtn = styled.button`
  margin-left: 8px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  color: white;

  transition: color 250ms linear;

  :hover {
    color: grey;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  margin-left: 8px;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  color: white;

  transition: color 250ms linear;

  :hover {
    color: grey;
  }
`;
