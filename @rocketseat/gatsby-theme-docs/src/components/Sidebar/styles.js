import styled from '@emotion/styled';
import { darken } from 'polished';

export const Container = styled.aside`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sidebar.background};

  overflow-y: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  position: sticky;
  top: 0;
  padding-top: 36px;
  transition: transform 0.5s;
  height: 100vh;

  nav {
    width: 100%;
    padding-top: 24px;
    align-self: flex-start;
    flex: 1;
  }

  @media (max-width: 780px) {
    max-width: 240px;
    min-width: 240px;
    z-index: 1001;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding-top: 32px;
    transform: translate3d(
      ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')},
      0,
      0
    );
  }
`;

export const LogoContainer = styled.div`
  width: 100%;

  a {
    width: 100%;
    padding-left: 30px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  padding-left: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.li`
  padding-left: 30px;
  width: 100%;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.142em;
`;

export const Item = styled.li`
  font-size: 15px;
  width: 100%;
  transition: all 200ms ease-in-out;
  padding: 0 20px;

  a,
  span {
    display: block;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.sidebar.link};
    background-color: ${({ theme }) => theme.colors.sidebar.background};
    padding: 4px 10px;
    margin: 4px 0;
    border-radius: 4px;
    font-weight: normal;

    text-decoration: none;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;
    margin: 0 auto;

    transition: background-color 0.2s, color 0.2s, padding-left 0.2s;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    &:not(.active-link):hover {
      padding-left: 20px;
      color: ${({ theme }) => darken('0.2', theme.colors.sidebar.link)};
    }

    &.active-link {
      color: ${({ theme }) => darken('0.2', theme.colors.sidebar.link)};
      background-color: ${({ theme }) => theme.colors.sidebar.itemActive};
    }
  }
`;

export const SubItem = styled(List)`
  margin: 5px 0 0 0;
`;
