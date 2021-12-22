import './styles.css'

import Alphavantage from '../modules/Alphavantage'
import Comp1 from '../modules/Comp1'
import Comp2 from '../modules/Comp2'
import Finnhub from '../modules/Finnhub'
import Iexcloud from '../modules/Iexcloud'
import React from 'react'

function App(): JSX.Element {
  const inputValue = React.useRef('')
  const [ticker, setTicker] = React.useState('')

  return (
    <div>
      <header></header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setTicker(inputValue.current)
          }}
        >
          <input
            type="text"
            onChange={(e) => (inputValue.current = e.target.value)}
          />
          <button type="submit">Set Ticker</button>
        </form>
        {/* <Alphavantage /> */}
        <Finnhub ticker={ticker} />
        {/* <Iexcloud ticker={ticker} /> */}
        <Comp1 />
        <Comp2 />
      </main>
    </div>
  )
}

export default App
