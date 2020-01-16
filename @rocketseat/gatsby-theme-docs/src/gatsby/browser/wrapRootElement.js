/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';
import GlobalStyle from '../../styles/global';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
);
