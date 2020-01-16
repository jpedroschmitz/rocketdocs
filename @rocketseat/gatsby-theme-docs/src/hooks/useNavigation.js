import { graphql, useStaticQuery } from 'gatsby';

export default function useNavigation() {
  const data = useStaticQuery(graphql`
    query {
      allMenuItems {
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
    }
  `);

  return data.allMenuItems.edges;
}
