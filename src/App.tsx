import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { styled } from '@stitches/react'
import { GlobalStyles } from './styles/GlobalCss'

import { Header } from './components/UI/Header/Header';
import { AdSection } from './components/UI/AdSection/AdSection';

function App() {
  GlobalStyles();

  return (
    <div className="App">
      <Header></Header>
      <AdSection></AdSection>
    </div>
  )
}

export default App
