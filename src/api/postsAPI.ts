import { PostType } from "../types/postsTS"
import { instanceAPI } from "./instanceAPI"

export const postsAPI = {
  getPosts(limit: string, page: string) {
    return instanceAPI.get<PostType[]>(`posts?_limit=${limit}&_page=${page}`).then(res => res.data).catch(err => err)
  },
  getUserPosts(id: string, limit: string, page: string) {
    return instanceAPI.get<PostType[]>(`posts?userId=${id}&_limit=${limit}&_page=${page}`).then(res => res.data).catch(err => err)
  },
  getCurrPost(id: string) {
    return instanceAPI.get<PostType[]>(`posts/${id}`).then(res => res.data).catch(err => err)
  },
}