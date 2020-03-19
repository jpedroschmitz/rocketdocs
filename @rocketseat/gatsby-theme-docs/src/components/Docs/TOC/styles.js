import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  order: 2;
  margin-left: 3rem;
  max-width: 18rem;
  top: 4rem;
  max-height: calc(100vh - 4rem - 2.5rem - 3rem - 3rem);
  overflow: auto;
  width: 100%;
  max-width: 25%;

  h2 {
    color: #78757a;
    font-size: 0.875rem;
    letter-spacing: 0.075em;
    margin-top: 0rem;
    text-transform: uppercase;
    border: none;
  }

  nav ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    li {
      margin-bottom: 5px;

      a {
        font-size: 0.9rem;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    order: 0;
    max-width: 100%;
    margin: 0 0 24px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid #78757a;
  }
`;
