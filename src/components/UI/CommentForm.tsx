import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { CommentsType } from '../../types/commentsTS'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert/Alert'
import { Slide, Typography, useTheme } from '@mui/material'


type Props = {
  newComment: string | CommentsType,
  setNewComment: Dispatch<SetStateAction<string | CommentsType>>,
  createComment: ({ body, postId, id, name, email }: CommentsType) => Promise<void>
  comments: [] | CommentsType[],
}
const CommentForm: FC<Props> = ({ setNewComment, createComment, newComment, comments }) => {
  const { palette: { mode } } = useTheme()
  const [commentAdded, statusComment] = useState<boolean>(false)  // для Notification о том, что комментарий отправлен
  const handleSubmit = () => {
    createComment({
      body: newComment as string, postId: comments[0].postId, id: Number(new Date()),
      name: 'Пользователь не авторизован', email: 'Неизвестно'
    });
    statusComment(true);
    setNewComment('');
  }
  return (
    <Container sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'unset' } }}
      disableGutters maxWidth={false}>
      <TextField sx={{ width: { xs: '100%', sm: '300px' } }} multiline onChange={(e) => setNewComment(e.target.value)} value={newComment} id="outlined-basic"
        label="Комментарий" variant="outlined"
        onKeyDown={(e) => {
          if (e.code == 'Enter' && newComment !== '') {
            e.preventDefault()
            handleSubmit()
          }
        }} />
      <Button sx={{
        '&:hover': {
          backgroundColor: `${mode == 'dark' && '#90CAF9'}`,
          color: `${mode == 'dark' && 'black'}`,
        },
        bgcolor: `${mode == 'dark' && 'white'}`
      }}
        variant="contained" disabled={`${newComment}`.length < 1} onClick={() => handleSubmit()}>Отправить</Button>
      <Snackbar TransitionComponent={Slide} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={commentAdded}
        onClose={() => statusComment(false)}
        autoHideDuration={5000}>
        <Alert onClose={() => statusComment(false)} severity="success" sx={{ width: '100%', backgroundColor: '#2E7D32', color: "#fff" }}>
          <Typography>Комментарий добавлен!</Typography>
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default CommentForm