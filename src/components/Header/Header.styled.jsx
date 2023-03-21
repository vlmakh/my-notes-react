import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  padding: 0 8px;
  background: grey;
  color: #ffffff;
  z-index: 1000;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;

export const LogoText = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: white;
`;

export const My = styled.span`
  color: lightgrey;
`;

export const UserName = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  margin-right: 16px;
  text-decoration: none;
  color: white;
`;

export const Mobile = styled.span`
  height: 24px;

  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const Desktop = styled.span`
  @media screen and (max-width: 479.98px) {
    display: none;
  }
`;
