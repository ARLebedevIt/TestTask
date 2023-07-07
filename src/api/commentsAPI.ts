import { CommentsType } from "../types/commentsTS"
import { instanceAPI } from "./instanceAPI"

export const commentsAPI = {
  getComments(postId: string) {
    return instanceAPI.get<CommentsType[]>(`posts/${postId}/comments`).then(res => res.data).catch(err => err)
  },
  setNewComment(body: string, postId: number, id: number, name?: string, email?: string) {
    return instanceAPI.post(`comments`, {body, postId, id, name, email}).then(res => res.data).catch(err => console.log(err)
    )
  }
}