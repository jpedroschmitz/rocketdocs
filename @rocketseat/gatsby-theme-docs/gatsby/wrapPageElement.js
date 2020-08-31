/* eslint-disable */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Code from '../src/components/Code';

const components = {
  code: Code,
  inlineCode: (props) => <code className="inline-code" {...props} />,
  table: ({ children, ...rest }) => (
    <div style={{ overflowX: `auto` }}>
      <table {...rest}>{children}</table>
    </div>
  ),
};

export function wrapPageElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
