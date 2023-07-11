import React, { Dispatch, FC, SetStateAction, memo, useEffect, useState } from 'react'
import { PostType } from '../../../types/postsTS'
import Post from '../Post/Post'
import { postsAPI } from '../../../api/postsAPI'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Alert, Box, Container, Snackbar, Typography, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useLocation, useSearchParams } from 'react-router-dom';
import { QueryType } from '../../../types/urlQueryTS';

type Props = {
  posts: PostType[] | null
  setPosts: Dispatch<SetStateAction<PostType[] | null>>
  currUser: string | null
  setUser: Dispatch<SetStateAction<string | null>>
  currLimit: string
}

const PostList: FC<Props> = memo(({ posts, setPosts, currUser, setUser, currLimit }) => {
  const { palette: { mode } } = useTheme()
  const [searchParams, setSearchParams] = useSearchParams();
  let [currPage, setPage] = useState<number>(1)
  const [notFound, setNotFound] = useState<boolean>(false) // для Notification о том, что User не найден
  const location = useLocation()
  let query: QueryType = { page: currPage, limit: currLimit }
  const [statusPosts, setPostsStatus] = useState<boolean>(false)  // для Notification о том, что загружены все посты по фильтру
  const { ref, inView } = useInView({
    threshold: 0,
  });
  /* В каждом useEffect мы объявляем переменную actualPage, что бы занести актуальное значение currPage, т.к. запрос на сервер уходит до того как 
   сработает setPage(++currPage), setPage(prev => ++prev) и тд.
    Зачастую запросы на сервер делаются строго в строковом формате, поэтому операции мы проводим над типом number, а уже итоговый результат приобразуем
    в строку +currPage > 1 ? '0' : `${currPage}`
  */

  // Запрос всех постов / постов конкретного пользователя
  useEffect(() => {
    const fetchUserPosts = async () => {
      setPage(1)
      let actualPage = 1  
      let actualQuery = query      
      if (currUser == null) {
        actualQuery = {...actualQuery, page: actualPage}
        let result = await postsAPI.getPosts(currLimit, `${actualPage}`)
        setPosts(result)        
        //@ts-ignore
        setSearchParams(new URLSearchParams(actualQuery))
      }
      if (currUser != null) {
        actualQuery = {...actualQuery, page: actualPage, userId: currUser}
        const result = await postsAPI.getUserPosts(currUser!, currLimit, `${actualPage}`)
        setPosts(result)
        //@ts-ignore
        setSearchParams(new URLSearchParams(actualQuery))
      }
    }
    fetchUserPosts()
  }, [currUser, currLimit])
  // Запрос постов пользователя по URL Query posts?page=1&userId={...}
  useEffect(() => {
    setSearchParams(location.search)
    let parsed = Object.fromEntries([...searchParams])
    if (+parsed.userId <= 10) { // нам заранее известно кол-во юзеров, но в проде можно прокинуть user.length из компоненты Users
      setUser(parsed.userId)
    } else if (+parsed.userId > 10) {
      setNotFound(true);
      setUser(null)
    }
  }, [searchParams])
  // Автоматическая подгрузка постов, для конкретного пользователя, а так же для всех постов
  useEffect(() => {
    const fetchMorePosts = async () => {
      if (inView) {
        setPage(++currPage)
        let actualQuery = query
        let actualPage = currPage
        actualQuery = {...query, page: actualPage}
        let result: PostType[]
        if (currUser) {
          result = await postsAPI.getUserPosts(currUser!, currLimit, `${actualPage}`);
          actualQuery = {...query, userId: currUser};
        } else result = await postsAPI.getPosts(currLimit, `${actualPage}`);
        setPosts(prev => [...prev!, ...result])
        if (result.length < 1) {
          setPostsStatus(true)
           //@ts-ignore
        } else setSearchParams(new URLSearchParams(actualQuery))
      }
    }
    fetchMorePosts()
  }, [inView])
  return (
    <>
      <Container maxWidth={false}>
        <List sx={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
          {posts?.map(item => (
            <ListItem key={item.id} disablePadding sx={{ border: `2px solid ${mode == 'dark' ? 'grey' : '#1976D2'}`, borderRadius: '5px' }}>
              <ListItemButton sx={{ display: 'inline' }}>
                <Post post={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {posts && <Box ref={ref} sx={{ height: '1px' }} />}
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={statusPosts} autoHideDuration={6000}
          onClose={() => setPostsStatus(false)}>
          <Alert onClose={() => setPostsStatus(false)} severity="info" sx={{ width: '100%', backgroundColor: '#0288D1', color: '#fff' }}>
            <Typography>Все посты получены!</Typography>
          </Alert>
        </Snackbar>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={notFound}
          onClose={() => setNotFound(false)}
          autoHideDuration={5000}>
          <Alert onClose={() => setNotFound(false)} severity="error" >
            <Typography>Пользователь не найден</Typography>
          </Alert>
        </Snackbar>
      </Container>
    </>
  )
})

export default PostList