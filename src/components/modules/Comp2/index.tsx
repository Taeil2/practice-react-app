import React, { useRef, useState } from 'react'

const Comp2 = (): JSX.Element => {
  const refValue = useRef(0)

  const [value, setValue] = useState(0)

  return (
    <div>
      <h1>Comp 2</h1>
      <p>
        Demo showing that state changes update the render, while ref changes do
        not
      </p>
      <p>State Counter: {value}</p>
      <p>Ref Counter: {refValue.current}</p>
      <button onClick={() => setValue(value + 1)}>
        Increment state counter
      </button>
      <button
        onClick={() => {
          refValue.current += 1
        }}
      >
        Increment state counter
      </button>
      <p></p>
    </div>
  )
}

export default Comp2
