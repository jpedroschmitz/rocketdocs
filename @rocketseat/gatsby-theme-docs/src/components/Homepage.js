import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import SEO from './SEO';

export default function Home({ children }) {
  return (
    <Layout>
      <SEO />
      {children}
    </Layout>
  );
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
};
