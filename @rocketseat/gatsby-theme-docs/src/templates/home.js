import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Index from '../text/index.mdx';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Home() {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <h1>{site.siteMetadata.siteTitle}</h1>
      <SEO />
      <Index />
    </Layout>
  );
}
