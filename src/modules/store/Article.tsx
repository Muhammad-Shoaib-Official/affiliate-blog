import Image from 'next/image'
import React from 'react'
import { featuredImage1 } from '../../../public/assets/export'
import Link from 'next/link'

const Article = () => {
  return (
    <article className="article-item">
      <div className="image-wrapper">
        <Image className='image' src={featuredImage1} alt={""} />
      </div>
      <h2 className='article-title'>
        <Link href="">Idea</Link>
      </h2>
      <p className='posts-count'>{12} posts</p>
    </article>
  )
}

export default Article