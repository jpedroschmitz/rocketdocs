import styled from '@emotion/styled';
import { darken } from 'polished';

export const Wrapper = styled.div`
  position: sticky;
  order: 2;
  top: 72px;
  max-height: calc(100vh - 72px);
  overflow-y: auto;
  width: 100%;
  max-width: 200px;

  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    order: 0;
    max-width: 100%;
    margin-left: 0;
  }
`;

export const Container = styled.div`
  h2 {
    color: #737380;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.142em;
    margin-top: 0rem;
    border: none;
    margin: 0 0 16px 0;
  }

  nav ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    li {
      margin-bottom: 12px;
      line-height: 1.1;

      a {
        font-size: 13px;
        color: #999999;
        font-weight: 400;
        text-decoration: none;
        transition: all 0.2s;

        &:hover {
          color: ${({ theme }) => darken('0.2', theme.colors.sidebar.link)};
        }
      }
    }
  }

  @media (max-width: 1200px) {
    margin: 0 0 24px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(120, 117, 122, 0.2);
  }
`;
