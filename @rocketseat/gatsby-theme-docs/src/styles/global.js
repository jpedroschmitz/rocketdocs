import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    background: ${lighten('0.35', '#737380')}!important;
  }

  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1 {
    font-size: 32px;
    color: #13131A;
    font-weight: bold;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    padding-bottom: 8px;
    border-bottom: 1px solid #D5D5E0;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  h2, h3, h4, h5, h6 {
    color: #737380;
    margin: 24px 0 16px 0;
  }

  p {
    color: #737380;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 16px;
    font-weight: 400;
  }

  a {
    color: #737380;
    font-weight: bold;
  }

  blockquote {
    border-left: 4px solid #e7e7e7;
    padding: 0 2rem;

    p {
      font-style: italic!important;
      font-size: 0.88em!important;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  tr {
    background-color: #ffffff
  }

  code.language-text {
    border-radius: 5px;
    font-size: 15px;
  }

  .gatsby-highlight {
    border-radius: 5px;
    margin-bottom: 16px;
    padding: 1rem;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    font-size: 14px!important;
  }

  .gatsby-highlight pre[class*="language-"] {
    padding: 0;
  }
`;
