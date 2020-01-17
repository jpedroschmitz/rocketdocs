import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.aside`
  width: 20%;
  max-width: 280px;
  min-width: 280px;
  background-color: ${({ theme }) => theme.colors.sidebar.background};
  border-right: 1px solid #d5d5e0;

  position: fixed;
  overflow-y: scroll;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  transition: transform 0.5s;

  height: 100vh;

  nav {
    width: 100%;
    align-self: flex-start;
    margin-bottom: 20px;
    flex: 1;
  }

  footer {
    padding: 24px 0 24px 40px;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.sidebar.footer};

    p {
      color: ${({ theme }) => theme.colors.sidebar.footer};
      font-size: 12px;
      margin: 0;
    }
  }

  @media (max-width: 780px) {
    max-width: 240px;
    min-width: 240px;
    transform: translate3d(
      ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')},
      0,
      0
    );
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 122px;
  min-height: 122px;

  a {
    width: 100%;
    height: 100%;
    padding-left: 40px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.li`
  line-height: 46px;
  font-size: 16px;
  width: 100%;
  transition: all 200ms ease-in-out;

  a,
  span {
    display: block;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.sidebar.link};
    background-color: ${({ theme }) => theme.colors.sidebar.background};

    text-decoration: none;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;

    margin: 0 auto;
    padding-left: ${({ isSubitem }) => (isSubitem ? '80px' : '40px')};

    transition: all 200ms ease-in-out;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    &:hover {
      color: ${({ theme }) => darken('0.04', theme.colors.sidebar.link)};
      background-color: ${({ theme }) =>
        darken('0.02', theme.colors.sidebar.itemActive)};
    }
  }

  .active-link {
    border-left: 2px solid #7159c1;
    background-color: ${({ theme }) => theme.colors.sidebar.itemActive};
    color: ${({ theme }) => theme.colors.sidebar.linkActive};

    &:hover {
      background-color: ${({ theme }) =>
        darken('0.02', theme.colors.sidebar.itemActive)};
      color: ${({ theme }) => theme.colors.sidebar.linkActive};
    }
  }
`;

export const SubItem = styled(List)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
