import { PostType } from "../types/postsTS"
import { instanceAPI } from "./instanceAPI"

export const postsAPI = {
  getPosts(limit: number = 20) {
    return instanceAPI.get<PostType[]>(`posts?_limit=${limit}`).then(res => res.data).catch(err => err)
  },
  getUserPosts(id: string) {
    return instanceAPI.get<PostType[]>(`posts?userId=${id}`).then(res => res.data).catch(err => err)
  },
  getCurrPost(id: string) {
    return instanceAPI.get<PostType[]>(`posts/${id}`).then(res => res.data).catch(err => err)
  }
}