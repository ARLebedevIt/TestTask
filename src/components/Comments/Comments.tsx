import React, { useEffect, useState, memo, FC } from 'react'
import { commentsAPI } from '../../api/commentsAPI'
import { CommentsType } from '../../types/commentsTS'
import { PostType } from '../../types/postsTS'
import { Box } from '@mui/material'
import CommentForm from '../UI/CommentForm'

type Props = {
  id: string
  postInfo: PostType | null
}

// Сервер не меняет параметр id: +Math.floor(Math.random() * 3), поэтому не получается использовать в качетсве key={item.id},
// из-за этого падает ошибка при создании поста

// newComment - добавил CommentsType с заделом на будущее, если бы пришлось хранить к примеру данные всего поста, а не просто строчку body
const Comments: FC<Props> = memo(({ id, postInfo }) => {
  const [comments, setComments] = useState<CommentsType[] | []>([])
  const [newComment, setNewComment] = useState<CommentsType | string>('')
  useEffect(() => {
    const fetchComments = async () => {
      if (postInfo != null) {
        let response = await commentsAPI.getComments(id)
        setComments(response)
      }
    }
    fetchComments()
  }, [postInfo])
  const createComment = async ({body, postId, id, name, email}: CommentsType) => {
    let response: CommentsType = await commentsAPI.setNewComment(body, postId, id, name, email)
    setNewComment('')
    setComments(prev => [...prev, response])
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {comments.length > 1 && comments?.map((item, index) => <React.Fragment key={index}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <Box>{`Автор комментария: Имя: ${item.name}, Почта: ${item.email}`}</Box>
        <Box>{`Комментарий: ${item.body}`}</Box>
      </Box>
    </React.Fragment>)}
    <CommentForm newComment={newComment} comments={comments} setNewComment={setNewComment} createComment={createComment} />
    </Box>
  )
})

export default Comments