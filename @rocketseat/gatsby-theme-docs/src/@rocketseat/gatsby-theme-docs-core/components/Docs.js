/* eslint-disable react/prop-types */
import React from 'react';
import Docs from '../../../components/Docs';

export default function Docspage({ data: { mdx }, pageContext, children }) {
  return (
    <Docs mdx={mdx} pageContext={pageContext}>
      {children}
    </Docs>
  );
}
