/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';
import { useTheme } from 'emotion-theming';

export default function EditGithub({ githubEditUrl }) {
  const theme = useTheme();

  if (githubEditUrl) {
    return (
      <a
        href={githubEditUrl}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          display: flex;
          align-items: center;
          text-decoration: none;
          margin-top: 48px;
          color: ${theme.colors.text};
          opacity: 0.8;
          font-size: 14px;
          font-weight: normal;
        `}
      >
        <MdEdit style={{ marginRight: '5px' }} />
        Edit this page on GitHub
      </a>
    );
  }
  return null;
}

EditGithub.propTypes = {
  githubEditUrl: PropTypes.string,
};

EditGithub.defaultProps = {
  githubEditUrl: null,
};
