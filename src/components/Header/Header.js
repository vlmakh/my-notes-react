import {
  HeaderWrap,
  LogoLink,
  LogoText,
  My,
  UserName,
  Mobile,
  Desktop,
} from 'components/Header/Header.styled';
import { Box } from 'components/Box/Box';
import { ButtonLink } from 'components/Buttons/Buttons';
import { MdLogout } from 'react-icons/md';

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
          {user && <UserName to="/user">{user}</UserName>}
          <ButtonLink to="/logout" onClick={handleLogout}>
            <Desktop>
              Logout
              <MdLogout size="24" />
            </Desktop>
            <Mobile>
              <MdLogout size="24" />
            </Mobile>
          </ButtonLink>
        </Box>
      )}
    </HeaderWrap>
  );
}
