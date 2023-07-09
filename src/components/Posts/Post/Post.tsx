import React, { FC } from 'react'
import { PostType } from '../../../types/postsTS'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'

type Props = {
  post: PostType
}

const Post: FC<Props> = ({ post }) => {
  const navigate = useNavigate()
  return (
    <Container disableGutters maxWidth={false} onClick={() => navigate(`/posts/${post.id}`, { replace: false })}>
      <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <Box>
          <Typography>{`Название: ${post.title}`}</Typography>
        </Box>
        <Box>
          <Typography>{`Содержимое: ${post.body}`}</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Post