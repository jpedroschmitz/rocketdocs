import { graphql, useStaticQuery } from 'gatsby';
import { isExternalUrl, normalizeBasePath } from '../../util/url';

export function useSidebar() {
  const data = useStaticQuery(graphql`
    {
      allSidebarItems {
        edges {
          node {
            label
            link
            items {
              label
              link
            }
            id
          }
        }
      }
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const { basePath } = data.site.siteMetadata;

  const {
    allSidebarItems: { edges },
  } = data;

  if (basePath) {
    const normalizedSidebar = edges.map(
      ({ node: { label, link, items, id } }) => {
        if (Array.isArray(items)) {
          items = items.map(item => ({
            label: item.label,
            link: isExternalUrl(link)
              ? link
              : normalizeBasePath(basePath, item.link),
          }));
        }

        const auxLink = isExternalUrl(link)
          ? link
          : normalizeBasePath(basePath, link);

        return {
          node: {
            id,
            label,
            items,
            link: link && auxLink,
          },
        };
      },
    );

    return normalizedSidebar;
  }

  return edges;
}

// TODO - already returns with basePath if it was defined
