import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import StyledSocialList from './styled/social-list';

export default function SocialList(props) {
  return (
    <StyledSocialList {...props}>
      <li>
        <a
          href="https://github.com/randomlang"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>

      <li>
        <a
          href="https://glitch.com/@randomlang"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          🎏
        </a>
      </li>

    </StyledSocialList>
  );
}
