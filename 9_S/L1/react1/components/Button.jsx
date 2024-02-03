import { useState } from "react"

const Button = () => {
  const[count, setCount] = useState(0)
  
  return (
<button style={{marginTop: '20px', color: 'pink'}} onClick={() => setCount((count) => count + 1)}>il conteggio è: {count}</button>
  )
}

export default Button