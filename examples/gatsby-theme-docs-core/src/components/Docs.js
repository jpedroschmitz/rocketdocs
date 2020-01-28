import React from 'react';
import PropTypes from 'prop-types';

export default function Docs({ data, pageContext }) {
  return (
    <>
      <h1>My Example</h1>
      <p>data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>pageContext:</p>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </>
  );
}

Docs.propTypes = {
  data: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};
