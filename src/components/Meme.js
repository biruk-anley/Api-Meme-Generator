import React from 'react'

import memesData from '../memesData'
const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: " ",
    belowText: " ",
    randomImage : "https://i.imgflip.com/30b1gx.jpg"
  })
  const [allMemesImage, setAllMemesImage] = React.useState(memesData)

  const handleOnClick = () => {
        const memesArray = allMemesImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevmeme => {
        return {
              ...prevmeme, randomImage:url
            }
          })
        
    
  }

  return (
    <main className='Form'>
      <div className='form'>
          <input type='text' placeholder='shut up' className='form--input' />
          <input type='text' placeholder='Take Money' className='form--input' />
        <button className='form--button' onClick={handleOnClick}>
          Get a new meme images
            
        </button>
       
      </div>
       <img src={meme.randomImage} alt="new iamge is added" className='meme__image'/>
         
          
      </main>
  )
}

export default Meme;
