import React from 'react'
import { NewsLetter } from '../export'
import Article from './Article'
const Aside = () => {
  return (
    <div className='aside'>
      <NewsLetter />
      <Article />
      <Article />
    </div>
  )
}

export default Aside