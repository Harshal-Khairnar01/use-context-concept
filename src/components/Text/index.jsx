
import React from 'react'
import { useCount } from '../../context/countContext.jsx';

const Text = () => {
    const {count} = useCount();
  return (
   <p>The count is : {count}</p>
  )
}

export default Text
