import { createFactory } from 'react'

import Portfolio from 'Projects/Portfolio'

export default [
  {
    description:
      "Portfolio actuel pour me présenter ainsi que présenter mes compétences, les projets que j'ai réalisés ou que je réalise.",
    duration: '2017',
    name: 'Portfolio',
    // location: '',
    // logo: require('img/recipelist/logo-white.svg'),
    loadComponent: createFactory(Portfolio),
    order: 0,
    slug: 'Portfolio',
    role: 'Creator',
    scope: 'Web, Mobile',
    stack: 'React, React-Router, Webpack, Node, Express',
    website: 'https://ryanfarrah25.fr'
  }
]
