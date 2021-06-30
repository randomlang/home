import React from 'react';
import { Link } from 'gatsby';

import StyledHeader from './styled/header';

export default function header() {
  return (
    <StyledHeader>
      <nav role="navigation">
        <ul>
          <li className="logo">
            <Link to="/" aria-label="Homepage">
             <img alt="logo" height="70px" width="70px" src="logo.png"></img>
            </Link>
          </li>

        </ul>
      </nav>
    </StyledHeader>
  );
}
