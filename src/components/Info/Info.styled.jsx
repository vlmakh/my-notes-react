import styled from '@emotion/styled';

export const InfoBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  height: 300px;

  @media screen and (min-width: 768px) {
    width: 720px;
    display: flex;
    justify-content: space-between;
  }
`;

export const ImgBox = styled.div`
  width: 300px;

  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const MsgBox = styled.div`
  width: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.h2`
  color: ${p => p.theme.colors.textSec};
  text-align: center;
`;
