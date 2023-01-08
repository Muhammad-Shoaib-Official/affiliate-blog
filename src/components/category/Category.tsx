import { Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Category: FC<{ image: StaticImageData, label: string, link: string }> = (props) => {
    const { image, label, link } = props
    return (
        <Link href={link}>
            <Box className='tag' sx={{ position: "relative" }} >
                <Typography className='color-black' py={0.25} px={1.5} fontWeight={500} position={"absolute"} bottom={15} left={5} borderRadius={4} sx={{ backgroundColor: "white" }}>{label}</Typography>
                <Image src={image} alt={label} width={165} height={120} className="border-22" />
            </Box>
        </Link>
    )
}

export default Category