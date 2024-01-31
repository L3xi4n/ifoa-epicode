import { useState } from "react"

const Button = () => {
  const[count, setCount] = useState(0)
  
  return (
<button onClick={() => setCount((count) => count + 1)}>il conteggio è: {count}</button>
  )
}

export default Button