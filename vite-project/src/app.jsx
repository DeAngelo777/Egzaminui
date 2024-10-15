import { useState } from 'preact/hooks'
import search from './assets/search.png'
import './app.css'
import { useEffect } from 'preact/hooks'



export function App() {
  const [color, setColor] = useState(0)

  const click = color => {
    setColor(color, color)
  }


  useEffect(() => {
    document.body.style.backgroundColor = color

  }, [color])



  return (
    <>
      <div>
    <img src={search} className="search" alt="" onClick={ () => click("yellow", "red")} />

      </div>
    </>
  )
}
