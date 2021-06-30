import React from 'react';

import { Layout, SEO, Hero, CardGrid} from '../components/elements';

export default function indexPage() {
  return (
    <Layout>
      <SEO
        title="Randomlang"
        description="Homepage for RandomLang"
      />
      <Hero />
      <CardGrid/>
    </Layout>
    
  );
}
