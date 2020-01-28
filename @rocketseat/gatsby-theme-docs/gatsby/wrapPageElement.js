/* eslint-disable */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Code from '../src/components/Code';

const components = {
  'p.inlineCode': props => (
    <code
      {...props}
      style={{
        padding: '0.25rem 0.5rem',
        backgroundColor: '#1d1f27',
        color: 'rgba(248,248,242)',
        borderRadius: '3px',
      }}
    ></code>
  ),
  code: Code,
};

export function wrapPageElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
