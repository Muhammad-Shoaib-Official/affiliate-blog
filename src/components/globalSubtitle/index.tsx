import { Typography } from '@mui/material'
import React, { FC } from 'react'

const GlobalSubtitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Typography mb={1} flex={1} fontWeight={500} fontSize={"0.85rem"} className='upper-case'>{title}</Typography>
  )
}

export default GlobalSubtitle