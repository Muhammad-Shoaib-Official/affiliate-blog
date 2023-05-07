import React from 'react'
import { Grid } from '@mui/material'
import HomePost from './HomePost'
import GlobalSubtitle from '../globalSubtitle'
import Aside from './Aside'

const NewPost = () => {
  return (
    <div>
      <GlobalSubtitle title="what's new" />
      <div className='new-post' >
        <div className='main-section'>
          <HomePost />
        </div>
        <div className='aside-section'>
          <Aside />
        </div>
      </div>
    </div>
  )
}
export default NewPost