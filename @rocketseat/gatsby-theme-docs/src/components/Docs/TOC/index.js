import React from 'react';
import PropTypes from 'prop-types';

import slug from '../../../util/slug';

import { Wrapper, Container } from './styles';

export default function TableOfContents({ headings, disableTOC }) {
  if (!disableTOC) {
    return (
      <Wrapper>
        <Container>
          <h2>On this page</h2>
          <nav>
            <ul>
              {headings
                .filter((heading) => heading.depth === 2)
                .map((heading) => (
                  <li key={heading.value}>
                    <a href={`#${slug(heading.value)}`}>{heading.value}</a>
                  </li>
                ))}
            </ul>
          </nav>
        </Container>
      </Wrapper>
    );
  }

  return <Wrapper />;
}

TableOfContents.propTypes = {
  headings: PropTypes.array,
  disableTOC: PropTypes.bool.isRequired,
};

TableOfContents.defaultProps = {
  headings: null,
};
