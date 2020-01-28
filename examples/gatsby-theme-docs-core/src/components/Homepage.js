import React from 'react';
import PropTypes from 'prop-types';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

export default function Homepage() {
  const data = useSidebar();

  return (
    <>
      <h1>Home</h1>
      <p>useSidebar:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

Homepage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};
