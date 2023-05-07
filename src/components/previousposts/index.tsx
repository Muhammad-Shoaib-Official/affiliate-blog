import Link from 'next/link'
import React from 'react'
import GlobalSubtitle from '../globalSubtitle'
import Article from './Article'
import { Stack } from '@mui/material'

const Previousposts = () => {
  return (
    <>
      <GlobalSubtitle title="Previous posts" />
      <div className='previous-post'>
        <div className='article-wrapper'>
          {["", "", ""]?.map((item) => <Article key={item} />)}
        </div>
        <div className='btn-wrapper'>
          <button className='global-btn' onClick={() => { }}>Load more</button>
        </div>
      </div>
    </>
  )
}

export default Previousposts