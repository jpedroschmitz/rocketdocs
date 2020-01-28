import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

import { Container, LogoContainer, List, Item, SubItem } from './styles';
import { isExternalUrl } from '../../util/url';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';
import Logo from '../Logo';

function ListWithSubItems({ children, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Item onClick={() => setIsOpen(!isOpen)}>
        <span>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          {text}
        </span>
      </Item>
      <SubItem isOpen={isOpen}>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { footer, basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          footer
          basePath
        }
      }
    }
  `);

  const data = useSidebar();

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Link to={basePath}>
          <Logo />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map(item => {
                return (
                  <Item key={item.link} isSubitem>
                    {renderLink(item.link, item.label)}
                  </Item>
                );
              });

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
      <footer>
        <p>{footer}</p>
      </footer>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
