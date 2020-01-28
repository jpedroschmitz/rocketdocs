import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../Layout';
import SEO from '../SEO';
import PostNav from './PostNav';

export default function Docs({ mdx, pageContext }) {
  const { prev, next } = pageContext;
  const { title, description, image } = mdx.frontmatter;
  const { slug } = mdx.fields;

  return (
    <Layout>
      <h1>{title}</h1>
      <SEO title={title} description={description} slug={slug} image={image} />
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <PostNav prev={prev} next={next} />
    </Layout>
  );
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
  }).isRequired,
};
