import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { featuredImage1 } from '../../../public/assets/export'
import { Tags } from "../export"

const Article = () => {
  return (
    <article className="article-item">
      <div className="image-wrapper">
        <Image className='image' src={featuredImage1} alt={""} />
      </div>
      <h2 className='item-title'>
        <Link href="">We are stronger as a group than an individual</Link>
      </h2>
    </article>
  )
}

export default Article