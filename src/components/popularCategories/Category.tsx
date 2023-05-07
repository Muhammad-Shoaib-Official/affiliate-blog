import { Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Category: FC<{ image: StaticImageData, label: string, link: string }> = (props) => {
    const { image, label, link } = props
    return (
        <Link href={link}>
            <Box sx={{ position: "relative" }} className='category'>
                <Typography className='color-black' py={0.25} px={1.5} fontWeight={500} position={"absolute"} bottom={15} left={5} borderRadius={4} sx={{ backgroundColor: "white",zIndex:2 }}>{label}</Typography>
                <div className="image-wrapper">
                    <Image src={image} alt={label} className="border-22" />
                </div>
            </Box>
        </Link>
    )
}

export default Category