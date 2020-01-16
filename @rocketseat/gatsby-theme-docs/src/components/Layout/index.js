import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import Header from '../Header';
import { Container } from './styles';

export default function Layout({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen} />
      <Header handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      <Container isMenuOpen={isMenuOpen}>{children}</Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
