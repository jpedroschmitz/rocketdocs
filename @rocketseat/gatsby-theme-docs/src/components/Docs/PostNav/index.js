import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { Container, Post } from './styles';

export default function Docs({ prev, next }) {
  return (
    <Container>
      {prev && (
        <Post isLeft>
          <Link to={prev.fields.slug}>
            <MdKeyboardArrowLeft />
            <div>
              <p>Prev</p>
              <h3>{prev.frontmatter.title}</h3>
            </div>
          </Link>
        </Post>
      )}
      {next && (
        <Post>
          <Link to={next.fields.slug}>
            <div>
              <p>Next</p>
              <h3>{next.frontmatter.title}</h3>
            </div>
            <MdKeyboardArrowRight />
          </Link>
        </Post>
      )}
    </Container>
  );
}

Docs.propTypes = {
  prev: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
  next: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

Docs.defaultProps = {
  prev: null,
  next: null,
};
