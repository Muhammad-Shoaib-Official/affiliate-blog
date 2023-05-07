import React from 'react'
import { Box, Typography } from '@mui/material'
import { articleImage } from '../../../public/assets/export'
import Image from 'next/image'
import { Tags } from '../export'
import Link from 'next/link'
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
const HomePost = () => {
  return (
    <>
      <div className='image-wrapper'>
        <Image src={articleImage} alt={"article image"} className="border-22" />
      </div>
      <Tags tagList={tagList} />
      <h3 className='post-heading' >
        <Link href={""}>
          The trick to getting more done is to have the freedom to roam around
        </Link >
      </h3>
      <Typography className="main-text">Vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam felis libero, congue quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum primis in faucibus.</Typography>
    </>
  )
}

export default HomePost