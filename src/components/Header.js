import React from 'react'
import memeIcon from '../images/meme2.png'
const Header=()=> {
  
  return (
      <div className='header'>
          <img src={ memeIcon} className="header--image" />
          <h2 className='header--title'>Meme Generator</h2>
          <h2 className='header--project'>react project</h2>

      </div>
  )
}

export default Header;
