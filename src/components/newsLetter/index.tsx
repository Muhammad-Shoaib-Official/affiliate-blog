import React from 'react'
import GlobalSubtitle from '../globalSubtitle'
import { TextField } from '@mui/material'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <GlobalSubtitle title='NEWSLETTER' />
      <p className="news-letter-title">Get all the latest posts delivered straight to your inbox.</p>
      <input type="email" className="email-field" placeholder='Your email address' />
      <div className="subscribe-btn-wrapper">
        <button className='global-btn subscribe-btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter