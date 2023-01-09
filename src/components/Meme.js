import React from 'react'

import memesData from '../memesData'
const Meme = () => {
 const [memeImage, setMemeImage] = React.useState("")

  const handleOnClick = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    
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
       <img src={memeImage} alt="new iamge is added" className='meme__image'/>
         
          
      </main>
  )
}

export default Meme;
