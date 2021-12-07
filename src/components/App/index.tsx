import './styles.css'

import Comp1 from '../modules/Comp1'
import Comp2 from '../modules/Comp2'
import React from 'react'

function App(): JSX.Element {
  return (
    <div>
      <header></header>
      <main>
        <Comp1 />
        <Comp2 />
      </main>
    </div>
  )
}

export default App
