import { Box } from '@mui/material'
import React from 'react'

export default function Container(props:any) {
  return (
    <Box className='container'>{props.children}</Box>
  )
}
