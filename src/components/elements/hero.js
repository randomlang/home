import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import StyledHero from './styled/hero';

export default function Hero() {
  return (
    <StyledHero>
      <div className="hero-wrapper">
        <div className="hero-welcome">
          <h1>
            <span className="greeting">
              Hi there
              <span role="img" aria-label="Hand wave emoji">
                👋
              </span>{' '}
            </span>
            Meet <span className="gatsby">Randomlang</span>.
          </h1>
        </div>
        <div className="hero-img">
        </div>
        <h2>
          The language made specifically for building random text generators easily. Anyone can start building with it in minutes, even first time coders!<br/>
          Comes with it's own online playground, free hosting, and python and javascript compilers.
        </h2>
        <h2>
        <b>The story:</b><br/>
          I'm <a href="https://twitter.com/ayshptk" rel="noopener noreferrer">ayush</a> and I made on a random day when I was bored. I've made a couple random 'x' generators before and they were weirdly loved by the internet.<br/><br/> And while they had dynamic content and can't be made using this lang, I thought it would be fun to build a language specifically for that, so that people who hit a creative idea will be able to build a live app in minutes and share it with their friends.
        </h2>
        <h2>
          I'm already a part of a lot of <a href="https://ayush.sh">(interesting? <span role="img">👀</span>) projects</a>, so this cannot be an active one, but while I add more-than-basic functionality and minidocs and all the other complimentary tools, you can start using the V0 of the language <a href="https://v0.randomlang.ayush.sh" rel="noopener noreferrer">here</a>.
        </h2>
      </div>
    </StyledHero>
  );
}
