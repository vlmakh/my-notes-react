import {
  HeaderWrap,
  LogoLink,
  LogoText,
  My,
  UserName,
} from 'components/Header/Header.styled';
import { Box } from 'components/Box/Box';
import { ButtonLink } from 'components/Buttons/Buttons';

export function Header({ user, handleLogout, isLoggedIn }) {
  return (
    <HeaderWrap>
      <LogoLink to="/">
        <LogoText>
          <My>My</My>Notes
        </LogoText>
      </LogoLink>

      {isLoggedIn && (
        <Box display="flex" alignItems="center">
          {user && <UserName>{user}</UserName>}
          <ButtonLink to="/logout" onClick={handleLogout}>
            Logout
          </ButtonLink>
        </Box>
      )}
    </HeaderWrap>
  );
}
