import React, { FC, useEffect, useState, memo, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { postsAPI } from '../../../api/postsAPI'
import { PostType } from '../../../types/postsTS'
import User from '../../Users/User/User'
import Comments from '../../Comments/Comments'
import { Box, CircularProgress, Container, Paper } from '@mui/material'

const PostInfo: FC = memo(() => {
  const [postInfo, setPost] = useState<PostType | null>(null)
  let { id } = useParams()
  useEffect(() => {
    const fetchPost = async () => {
      if (id !== null) {
        let response = await postsAPI.getCurrPost(id!)
        setPost(response)
      }
    }
    fetchPost()
  }, [])
  return (
    <>
      <Container maxWidth='xl' sx={{ display: 'flex', gap: '20px', flexDirection: 'column', mt: '20px', minHeight: '100%' }}>
        {!postInfo ?
          <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', minHeight: '100%' }}>
            <CircularProgress />
          </Box> : <><Box>
            <User postInfo={postInfo} />
          </Box>
            <Box sx={{ display: 'flex', gap: '15px', flexDirection: 'column', p: '10px', border: 'solid 2px grey', borderRadius: '5px'}} >
              <Box>
                {`Идентификатор поста: ${postInfo?.id}`}
              </Box>
              <Box>
                {`Название поста: ${postInfo?.title}`}
              </Box>
              <Box>
                {`Содержимое поста: ${postInfo?.body}`}
              </Box>
            </Box>
            <Box sx={{p: '10px', border: 'solid 2px grey', borderRadius: '5px'}}>
              <Comments postInfo={postInfo} id={id!} />
            </Box></>}
      </Container>
    </>
  )
})

export default PostInfo