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
      <h2>
        <Link href="">AI can solve new problems very easily</Link>
      </h2>
      <div className="global-meta">
        <span>by </span>
        <Link href={""}>Daryl Wehner</Link>
      </div>
    </article>
  )
}

export default Article