import React from 'react'
import useFetch from 'react-fetch-hook'

const baseUrl = 'https://finnhub.io/api/v1'
// key: c6eg6qiad3ie37m18cg0
// sandbox key: sandbox_c6eg6qiad3ie37m18cgg
const finnhubKey = 'sandbox_c6eg6qiad3ie37m18cgg'
// const ticker = 'AAPL'

interface Props {
  ticker?: string
}

// https://finnhub.io/docs/api/symbol-search
const Finnhub = ({ ticker }: Props) => {
  // useFetch vars: var.isLoading, var.data, var.error
  const profile = useFetch(
    `${baseUrl}/stock/profile?symbol=${ticker}&token=${finnhubKey}`
  )
  const newsSentiment = useFetch(
    `${baseUrl}/news-sentiment?symbol=${ticker}&token=${finnhubKey}`
  )

  console.log('Ticker profile data', profile.data)
  console.log('newsSentiment data', newsSentiment.data)

  return <div></div>
}

export default Finnhub
