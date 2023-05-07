import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { featuredImage1 } from '../../../public/assets/export'
import { Tags } from "../../components/export"

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
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quasi aspernatur. Qui ullam dolorum non officiis iusto aut eius incidunt rem hic quod magni impedit reprehenderit laudantium corrupti fuga nesciunt perspiciatis iure, architecto magnam eveniet nisi. Cupiditate placeat dolores iusto optio praesentium odio, repudiandae magnam non temporibus debitis magni reiciendis eum vitae qui quae labore hic minima suscipit omnis maxime harum sunt officia voluptatum nulla. Veritatis provident atque mollitia nostrum. Saepe illo sequi possimus dolor corporis, at ipsam animi soluta, doloribus unde harum amet aut. Distinctio incidunt quae ullam cum praesentium laboriosam, sapiente debitis sed porro obcaecati! Quisquam, nisi sit iure ut error totam hic harum veritatis quas pariatur delectus, quis laudantium asperiores ipsam illo dolor! Doloremque totam sunt beatae, et accusamus nulla saepe fugiat facere qui minus laboriosam odit. Labore dolor reiciendis fugit eaque veritatis corrupti, repellat, quos eum dolores exercitationem iste omnis doloribus doloremque debitis voluptatem modi. Ipsam sapiente impedit aliquam quia quis libero eveniet cumque beatae corrupti enim commodi, totam quod ad recusandae numquam labore consectetur dignissimos perferendis quo natus. Eveniet quis explicabo ipsa necessitatibus cum iusto quia exercitationem, voluptatum omnis? Perferendis maxime harum minima commodi a iure nihil accusantium, tenetur repellat facere laboriosam. Ex, culpa libero?"
const Article = () => {
  return (
    <article className="article-item">
      <div className="image-wrapper">
        <Image className='image' src={featuredImage1} alt={""} />
      </div>
      <Tags tagList={tagList} />
      <h2>
        <Link href="">AI can solve new problems very easily</Link>
      </h2>
      <p className='item-excerpt'>{(text.length > 50) ? `${text.slice(0,200)}...` : text}</p>
      <div className="global-meta">
        <span>by </span>
        <Link href={"#"}>Daryl Wehner</Link>
      </div>
    </article>
  )
}

export default Article