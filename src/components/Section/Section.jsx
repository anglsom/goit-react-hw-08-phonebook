import PropTypes from 'prop-types';
import { GlobalStyle } from 'components/Style';
import { MainSection, Container } from './Section.styled';

export default function Section({ children }) {
  return (
    <>
      <GlobalStyle />
      <MainSection>
        <Container>{children}</Container>
      </MainSection>
    </>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};