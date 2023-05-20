import getRandomElementFromArray  from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'
//este es el props
const ButtonPhrase = ({setPhraseRandom,setPathRandom,arrBackground}) => {

  const handleRandomPhrase=()=>{
    const newRandomPhrase=getRandomElementFromArray(phrase)
    setPhraseRandom(newRandomPhrase)
    const newPath=getRandomElementFromArray(arrBackground)
    setPathRandom(newPath)

  }
  return (
    <button className="btn" onClick={handleRandomPhrase}>Probar mi suerte</button>
  )
}

export default ButtonPhrase