import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import React from 'react'
import useFetch from 'react-fetch-hook'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const alphavantageKey = '3TJH6OVBBURSH9YG'
const ticker = 'AAPL'

// https://www.alphavantage.co/documentation/
const Alphavantage = () => {
  // useFetch vars: var.isLoading, var.data, var.error
  // const SMA = useFetch(`https://www.alphavantage.co/query?function=SMA&symbol=${ticker}&interval=weekly&time_period=52&series_type=open&apikey=${alphavantageKey}`);
  // const Weekly = useFetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=${alphavantageKey}`);

  // console.log('SMA isLoading', SMA.isLoading)
  // console.log('SMA data', SMA.data)
  // console.log('SMA error', SMA.error)
  // console.log('Weekly isLoading', Weekly.isLoading)
  // console.log('Weekly data', Weekly.data)
  // console.log('Weekly error', Weekly.error)

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Alphavantage
