import React, { FC, useEffect, useState, memo, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { postsAPI } from '../../../api/postsAPI'
import { PostType } from '../../../types/postsTS'
import Comments from '../../Comments/Comments'
import { Alert, Box, CircularProgress, Container, PaletteMode, Paper, Snackbar, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import User from '../../User/User'

const PostInfo: FC = memo(() => {
  const { palette: { mode } }: any = useTheme()
  const [postInfo, setPost] = useState<PostType | null>(null)
  const [componentMounted, setStatusComponent] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    const fetchPost = async () => {
      if (id !== null) {
        let response = await postsAPI.getCurrPost(id!)
        setPost(response)
      }
    }
    fetchPost()
    setStatusComponent(true)
  }, [])
  return (
    <>
      <Container maxWidth='xl' sx={{ display: 'flex', gap: '20px', flexDirection: 'column', py: '20px', minHeight: '100%' }}>
        {!postInfo ?
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress size={'70px'} />
          </Box> : <>
            <Box>
              <User postInfo={postInfo} />
            </Box>
            <Box sx={{
              display: 'flex', gap: '15px', flexDirection: 'column', p: '10px',
              border: `2px solid ${mode == 'dark' ? 'grey' : '#1976D2'}`, borderRadius: '5px'
            }} >
              <Box>
                <Typography>{`Идентификатор поста: ${postInfo?.id}`}</Typography>
              </Box>
              <Box>
                <Typography>{`Название поста: ${postInfo?.title}`}</Typography>
              </Box>
              <Box>
                <Typography>{`Содержимое поста: ${postInfo?.body}`}</Typography>
              </Box>
            </Box>
            <Box sx={{ border: `2px solid ${mode == 'dark' ? 'grey' : '#1976D2'}`,
              borderRadius: '5px'
            }}>
              <Comments postInfo={postInfo} id={id!} />
            </Box></>}
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={componentMounted}
        onClose={() => setStatusComponent(false)} autoHideDuration={3000}>
          <Alert severity="info" sx={{ width: '100%', backgroundColor: '#0288D1', color: '#fff' }}>
            <Typography>Информация о посте</Typography>
          </Alert>
        </Snackbar>
      </Container>
    </>
  )
})

export default PostInfo