import React from 'react'
import useFetch from 'react-fetch-hook'

const baseUrl = 'https://cloud.iexapis.com'
const iexcloudKey = 'pk_3cb59a9144154c1e93df1679376c3d9e'
// const ticker = 'AAPL'

interface Props {
  ticker?: string
}

// https://iexcloud.io/docs/api/
const Iexcloud = ({ ticker }: Props) => {
  // useFetch vars: var.isLoading, var.data, var.error
  // doesn't work because of free tier
  const estimates = useFetch(
    `${baseUrl}/time-series/CORE_ESTIMATES/${ticker}?token=${iexcloudKey}`
  )

  console.log('iex cloud estimates', estimates.data)

  return <div></div>
}

export default Iexcloud
