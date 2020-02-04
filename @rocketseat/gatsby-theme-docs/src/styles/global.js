import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { lighten } from 'polished';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
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
          background-color: ${theme.colors.background};
          text-rendering: optimizelegibility;
        }

        h1 {
          font-size: 32px;
          color: #333;
          font-weight: normal;
          margin-bottom: 24px;
        }

        h2 {
          font-size: 24px;
          padding-bottom: 8px;
          border-bottom: 1px solid #eee;
        }

        h3 {
          font-size: 18px;
        }

        h4 {
          font-size: 16px;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #737380;
          margin: 24px 0 16px 0;
          font-weight: normal;
        }

        p {
          color: #737380;
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;

          > code {
            background: #44475a !important;
          }
        }

        a {
          color: #737380;
          font-weight: bold;
        }

        blockquote {
          border-left: 4px solid #e7e7e7;
          padding: 0 2rem;

          p {
            font-style: italic !important;
            font-size: 0.88em !important;
            line-height: 28px;
          }
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          margin-bottom: 16px;
          color: #444;
        }

        th,
        td {
          text-align: left;
          padding: 12px;
        }

        tr:nth-child(2n) td {
          background-color: ${theme.colors.sidebar.itemActive};
        }

        tr {
          background-color: #ffffff;
        }

        iframe {
          margin-bottom: 16px;
        }

        ul {
          color: #737380;
          padding-left: 15px;

          li {
            line-height: 28px;
          }
        }

        .gatsby-highlight {
          position: relative;

          .token {
            font-style: normal !important;
          }
        }

        pre[class*='language-']::before {
          background: #d9d7e0;
          border-radius: 0 0 4px 4px;
          color: #232129;
          font-size: 12px;
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          letter-spacing: 0.075em;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        pre[class*='language-'] code {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        pre[class~='language-javascript']::before {
          content: 'js';
          background: #f7df1e;
        }

        pre[class~='language-js']::before {
          content: 'js';
          background: #f7df1e;
        }

        pre[class~='language-jsx']::before {
          content: 'jsx';
          background: #61dafb;
        }

        pre[class~='language-graphql']::before {
          content: 'GraphQL';
          background: #e10098;
          color: #fff;
        }

        pre[class~='language-html']::before {
          content: 'html';
          background: #005a9c;
          color: #fff;
        }

        pre[class~='language-css']::before {
          content: 'css';
          background: #ff9800;
          color: #fff;
        }

        pre[class~='language-mdx']::before {
          content: 'mdx';
          background: #f9ac00;
          color: #fff;
        }

        pre[class~='language-shell']::before {
          content: 'shell';
        }

        pre[class~='language-sh']::before {
          content: 'sh';
        }

        pre[class~='language-bash']::before {
          content: 'bash';
        }

        pre[class~='language-yaml']::before {
          content: 'yaml';
          background: #ffa8df;
        }

        pre[class~='language-markdown']::before {
          content: 'md';
        }

        pre[class~='language-json']::before,
        pre[class~='language-json5']::before {
          content: 'json';
          background: linen;
        }

        pre[class~='language-diff']::before {
          content: 'diff';
          background: #e6ffed;
        }

        pre[class~='language-text']::before {
          content: 'text';
          background: #fff;
        }

        pre[class~='language-flow']::before {
          content: 'flow';
          background: #e8bd36;
        }
      `}
    />
  );
}
