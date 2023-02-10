import {
  HeaderWrap,
  LogoText,
  My,
  UserName,
} from 'components/Header/Header.styled';
import { Box } from 'components/Box/Box';
import { ButtonLink } from 'components/Buttons/Buttons';

export function Header({ user, handleLogout, isLoggedIn }) {
  return (
    <HeaderWrap>
      <LogoText>
        <My>My</My>Notes
      </LogoText>

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
