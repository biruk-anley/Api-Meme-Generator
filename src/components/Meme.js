import React from 'react'
import memesData from '../memesData'
const Meme = () => {
  const handleOnClick = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
  }
  return (
    <main className='Form'>
      <form className='form'>
          <input type='text' placeholder='shut up' className='form--input' />
          <input type='text' placeholder='Take Money' className='form--input' />
        <button className='form--button' onClick={handleOnClick}>
          Get a new meme image
            
          </button>
      </form>
         
          
      </main>
  )
}

export default Meme;
