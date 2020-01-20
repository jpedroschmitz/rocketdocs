import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './styles.css';

export default function Theme({ title, description, docsLink, codeLink }) {
  return (
    <div className="theme">
      <h3 className="theme-title">{title}</h3>
      <p className="theme-description">{description}</p>
      <div className="links">
        <Link to={docsLink}>Docs</Link>
        {codeLink && (
          <a to={codeLink} rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  );
}

Theme.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  docsLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
};
