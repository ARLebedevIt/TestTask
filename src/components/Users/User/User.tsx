import React, { FC, useEffect, useState } from 'react'
import { UsersType } from '../../../types/usersTS'
import { usersAPI } from '../../../api/usersAPI'
import { PostType } from '../../../types/postsTS'
import { Box, Container, Typography } from '@mui/material'

type Props = {
  postInfo: PostType | null
}

const User: FC<Props> = ({postInfo}) => {
  const [userInfo, setUser] = useState<UsersType | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      if (postInfo == null) {
        return
      } else {
        let response = await usersAPI.getCurrUser(postInfo.userId)
        setUser(response)
      }
    }
    fetchUser()
  }, [postInfo])
  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ display: 'flex', gap: '15px', flexDirection: 'column', p: '10px', border: 'solid 2px grey', borderRadius: '5px'}}>
        <Box>
          <Typography>{`Автор поста: ${userInfo?.name}`}</Typography>
        </Box>
        <Box>
          <Typography>{`Идентификатор: ${userInfo?.id}`}</Typography>
        </Box>
        <Box>
          <Typography>{`Контакты: Mail: ${userInfo?.email}, Телефон: ${userInfo?.phone}`}</Typography>
        </Box>
        <Box>
          <Typography>{`Сайт: ${userInfo?.website}`}</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default User