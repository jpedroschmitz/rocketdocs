import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import PostNav from '../components/Docs/PostNav';
import SEO from '../components/SEO';

export default function Docs({ data: { mdx }, pageContext }) {
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
  data: PropTypes.shape({
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
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
  }).isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        description
        image
      }
      body
    }
  }
`;
