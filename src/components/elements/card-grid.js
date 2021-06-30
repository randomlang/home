import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Card from './card';
import StyledCardGrid from './styled/card-grid';

const tempCardData = {
  type: ['sample'],
  title: [
    'Placeholder Title',

  ],
  lorem: [
    'No projects are added yet :(',
    ],
  getRandomItem: function (prop) {
    return this[prop][Math.floor(Math.random() * this[prop].length)];
  },
};

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <h2>Projects</h2>
      <p>
        A showcase of some of the projects made by the community. Send me an email at <u><a href="mailto:hey@ayush.sh">hey@ayush.sh</a></u> to request addition of your project.
      </p>
      <div className="cards">
        <Card title="Project 1">
          <StaticImage
            src="../../images/pugs/pug-1.jpg"
            alt="Pug"
            placeholder="blurred"
          />
          <div className="card-content">
            <span className="type">{tempCardData.getRandomItem('type')}</span>
            <h3>{tempCardData.getRandomItem('title')}</h3>
            <p>{tempCardData.getRandomItem('lorem')}</p>
          </div>
        </Card>

      </div>
    </StyledCardGrid>
  );
}
