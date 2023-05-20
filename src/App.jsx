
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'
import AuthorPhrase from './components/AuthorPhrase'

const arrBackground=[1,2,3,4]
function App() {

  const initalPhrase=randomElementFromArray(phrases)
  const initalPhath=randomElementFromArray(arrBackground)
  const [phraseRandom,setPhraseRandom]=useState(initalPhrase)
  //estado
  const [pathRandom,setPathRandom]=useState(initalPhath)
  const objStyle={
    backgroundImage: `url('/fondo${pathRandom}.jpg')`
  }

  console.log(phraseRandom)

  return (
    
      <div style={objStyle} className='app'>
       
        <h1>Galleta de la fortuna </h1>
        <ButtonPhrase setPhraseRandom={setPhraseRandom} 
        arrBackground={arrBackground}
        setPathRandom={setPathRandom}
        />
        <PhrasesCard phraseRandom={phraseRandom}/>
        <AuthorPhrase authorRandom={phraseRandom}/>
      </div>
      
    
  )
}

export default App
