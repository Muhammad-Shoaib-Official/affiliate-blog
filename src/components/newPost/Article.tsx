import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Tags} from '../export'
import { featuredImage1 } from '../../../public/assets/export'

const tagList = [
  {
    tag: "lifestyle",
    link: "#"
  },
  {
    tag: "eco",
    link: "#"
  },
  {
    tag: "health",
    link: "#"
  },
]

const Article = () => {
  return (
    <article className="article-item">
      <div className="image-wrapper">
        <Image className='image' src={featuredImage1} alt={""} />
      </div>
      <Tags tagList={tagList} />
      <h2 className='article-title'>
        <Link href="">AI can solve new problems very easily</Link>
      </h2>
      <div className="global-meta">
        <span>by </span>
        <Link href={"#"}>Daryl Wehner</Link>
      </div>
    </article>
  )
}

export default Article