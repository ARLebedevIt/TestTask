import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { CommentsType } from '../../types/commentsTS'

type Props = {
  newComment: string | CommentsType,
  setNewComment: Dispatch<SetStateAction<string | CommentsType>>,
  createComment: ({body, postId, id, name, email}: CommentsType) => Promise<void>
  comments: [] | CommentsType[]
}

const CommentForm: FC<Props> = ({setNewComment, createComment, newComment, comments}) => {
  return (
    <Container sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', lg: 'row'}}} disableGutters maxWidth={false}>
      <TextField onChange={(e) => setNewComment(e.target.value)} value={newComment} id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" disabled={newComment.toString().length < 1} onClick={() => createComment({body: newComment as string, postId: comments[0].postId, id: Number(new Date()), 
        name: 'Пользователь не авторизован', email: 'Неизвестно'})}>Отправить</Button>
    </Container>
  )
}

export default CommentForm