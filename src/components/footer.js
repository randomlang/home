import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import StyledFooter from './styled/footer';
import SocialList from './elements/social-list';

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(AuthorQuery);
  return (
    <StyledFooter>
      <SocialList />
      <p className="author">
        Created by{' '}
        <a
          href="https://twitter.com/aysptk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ayush Pathak
        </a>
      </p>
    </StyledFooter>
  );
}

const AuthorQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
