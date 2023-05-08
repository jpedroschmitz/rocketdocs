import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import SEO from '../SEO';
import PostNav from './PostNav';
import EditGithub from './EditGithub';

export default function Docs({ mdx, pageContext, children }) {
  const { prev, next, repositoryEditUrl, repositoryProvider } = pageContext;
  const { title, description, image, disableTableOfContents } = mdx.frontmatter;
  const { headings } = mdx;
  const { slug } = mdx.fields;

  return (
    <>
      <SEO title={title} description={description} slug={slug} image={image} />
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        {children}
        <EditGithub
          repositoryEditUrl={repositoryEditUrl}
          repositoryProvider={repositoryProvider}
        />
        <PostNav prev={prev} next={next} />
      </Layout>
    </>
  );
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    headings: PropTypes.array,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      disableTableOfContents: PropTypes.bool,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
    repositoryEditUrl: PropTypes.string,
    repositoryProvider: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
