import { Header } from 'components/Header/Header';
import { LogoText, My } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Box } from 'components/Box/Box';

function HomePage() {
  return (
    <>
      <Header>
        <LogoText>
          <My>My</My>Notes
        </LogoText>
      </Header>

      <Box pt={5} textAlign="center">
        <h2>HOME PAGE</h2>
      </Box>

      <Footer></Footer>
    </>
  );
}

export { HomePage };
