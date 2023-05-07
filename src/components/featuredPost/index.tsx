import React from 'react'
import { GlobalSubtitle } from '../export';
import Article from './Article';
import Link from 'next/link';
const FeaturedPost = () => {
  return (
    <>
      <GlobalSubtitle title="Featured posts" />
      <div className='global-radius featured-section featured-post'>
        <small className="featured-subtitle">Editor’s Choice</small>
        <div className="global-cover is-featured" ></div>
        <h2 className="featured-title">Get started with our best stories</h2>
        <div className='article-wrapper'>
          {["", "", ""]?.map((item) => <Article key={item} />)}
        </div>
        <div className="featured-button-wrap">
          <Link href={""}>See all featured posts →</Link>
        </div>
      </div>
    </>
  )
}

export default FeaturedPost