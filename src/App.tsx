import { useState } from 'react'
import { GlobalStyles } from './styles/GlobalCss'

import { Header } from './components/UI/Header/Header';
import { AdSection } from './components/UI/AdSection/AdSection';
import { FeaturedProducts } from './components/Home/FeaturedProducts/FeaturedProducts';
import { RecentdProducts } from './components/Home/RecentProdutcs/RecentProdutcs';
import { HighLightedFeatures } from './components/Home/HighLightedFeatures/HighLightedFeatures';
import { WhatClientsSay } from './components/Home/WhatClientsSay/WhatClientsSay';

function App() {
  GlobalStyles();

  return (
    <div className="App">
      <Header/>
      <AdSection/>
      <FeaturedProducts/>
      <RecentdProducts/>
      <HighLightedFeatures/>
      <WhatClientsSay/>
    </div>
  )
}

export default App
