
import React from 'react'
import Text from '../Text'

// This is a button component that will be used to increment the count in the Text component
const index = ({ count,  onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Click to increment</button>
      <Text count={count} />
    </div>
  )
}

export default index
