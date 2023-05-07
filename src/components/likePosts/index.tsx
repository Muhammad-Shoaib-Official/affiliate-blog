import React from 'react'
import GlobalSubtitle from '../globalSubtitle'
import Article from './Article'

const LikePosts = () => {
  return (
    <>
      <GlobalSubtitle title="You might also like" />
      <div className='like-posts'>
        <div className='article-wrapper'>
          {["", "", "", "", ""]?.map((item) => <Article key={item} />)}
        </div>
      </div>
    </>
  )
}

export default LikePosts