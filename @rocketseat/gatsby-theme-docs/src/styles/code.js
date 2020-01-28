import { css } from 'styled-components';

export default css`
  .gatsby-highlight {
    position: relative;
  }

  pre[class*='language-']::before {
    background: #d9d7e0;
    border-radius: 0 0 4px 4px;
    color: #232129;
    font-size: 12px;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
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
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
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
    font-weight: 700;
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
`;
