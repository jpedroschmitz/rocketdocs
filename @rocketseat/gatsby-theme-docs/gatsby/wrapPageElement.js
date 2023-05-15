/* eslint-disable */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Code from '../src/components/Code';

const preToCodeBlock = (preProps) => {
  if (
    // children is code element
    preProps.children &&
    // if children is actually a <code>
    preProps.children.type &&
    preProps.children.type.name &&
    preProps.children.type.name === 'code'
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props;

    const match = className.match(/language-([\0-\uFFFF]*)/);

    return {
      codeString: codeString.trim(),
      className,
      language: match != null ? match[1] : '',
      ...props,
    };
  }
  return undefined;
};

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    }

    return <pre {...preProps} />;
  },
  code: (props) => <code className="inline-code" {...props} />,
  table: ({ children, ...rest }) => (
    <div style={{ overflowX: `auto` }}>
      <table {...rest}>{children}</table>
    </div>
  ),
};

export function wrapPageElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
