import styled from '@emotion/styled';

export const Container = styled.main`
  margin-left: 280px;
  padding: 64px 100px;
  height: 100%;

  transition: transform 0.5s;

  @media (max-width: 1000px) {
    padding: 48px;
  }

  @media (max-width: 780px) {
    padding: 24px 24px 48px 24px;
    margin-left: 0;
    transform: translate3d(
      ${({ isMenuOpen }) => (isMenuOpen ? '240px' : '0')},
      0,
      0
    );
  }
`;
