import { useState } from 'react'
import './App.css'
import incredibleFace from './img/incredibleFace2.jpg'
import incredibleFaceByN from './img/incredibleFace3.png'


function App() {


const aeropuerto = {
  situacion: "Se te acerca un perrito..",
  imagen: <img src={ incredibleFace } alt='mr incredible meme' style={{ width: 400}}/>,
  memesion: "En la calle"
}

const [meme, setMeme] = useState(aeropuerto)

  const hazmeReir = () => {

    setMeme (prevState => ({...prevState, memesion: "En el Aeropuerto", imagen: <img src={ incredibleFaceByN } alt='mr incredible meme' style={{ width: 400}}/>  }))

  }

  const otraVez = () => {
    setMeme(prevState => ({...prevState, memesion: "En la calle",   imagen: <img src={ incredibleFace } alt='mr incredible meme' style={{ width: 400}}/>,
  }))
  }

  return (
    <div className="App">

      <h1>{ meme.situacion }</h1>

      <div> {meme.imagen} </div>

      <h1>{ meme.memesion }</h1>

      <button onClick= { hazmeReir } style={{margin: 10, backgroundColor: "red"}}>Hazme reir..</button>
      <button onClick= { otraVez } >Otra Vez!</button>
      
      </div>
  )
}

export default App
