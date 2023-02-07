import styled from '@emotion/styled';
import Masonry from 'react-masonry-css';

import {
  typography,
  space,
  color,
  layout,
  border,
  shadow,
  flexbox,
  position,
} from 'styled-system';

export const Box = styled('div')(
  typography,
  space,
  color,
  layout,
  border,
  shadow,
  flexbox,
  position,
);

export const MasonryBox = styled(Masonry)`
  display: flex;
  column-gap: 8px;
  padding: 60px 8px 40px 8px;
  width: auto;  
`;
