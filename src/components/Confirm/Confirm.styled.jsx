import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  padding: 16px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
`;

export const Text = styled.p`
  color: #212112;
`;

export const Button = styled.button`
  padding: 4px;
  color: #212112;
  font-weight: 700;
  border-radius: 4px;

  transition: box-shadow 250ms linear;

  :hover {
    box-shadow: ${p => (p.disabled ? null: p.theme.shadows.box)};    
  }
`;
