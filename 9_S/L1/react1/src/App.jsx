import './App.css'
import { useEffect } from 'react'
import ButtonClass from '../components/ButtonC'
import Button from '../components/Button'

function App() {


// 3 modi per usarlo: 
//1)senza dipendenze (array vuoto), triggerato al primo render del componente
//2)con dipendenze (passi cose nell'array), triggerato al primo render del componente e ogni cambiamento della dipendenza
//3)

let newTitle = 'first react app'
useEffect(() => {
    document.title = newTitle;//quello che deve fare, non vincolato per forza a quello che gli passi
}, [newTitle]);//gli passi cose


   return(
    <>
    <Button />
    <ButtonClass />
 
    </>
    )
}

export default App
