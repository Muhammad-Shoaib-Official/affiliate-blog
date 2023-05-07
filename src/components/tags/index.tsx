import { Stack } from '@mui/material'
import React, { FC } from 'react'
import Tag from './Tag'
interface ITag {
  tag: string,
  link: string
}
const Tags: FC<{ tagList: ITag[] }> = (props) => {
  const { tagList = [] } = props;
  return (
    <Stack direction="row" className="tags" gap={1} my={1} >
      {tagList?.map(({ tag, link }: ITag) => (
        <Tag name={tag} link={link} key={link} />
      ))}
    </Stack>
  )
}

export default Tags