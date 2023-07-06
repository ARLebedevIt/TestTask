import { CommentsType } from "../types/commentsTS"
import { instanceAPI } from "./instanceAPI"

export const commentsAPI = {
  getComments(postId: string) {
    return instanceAPI.get<CommentsType[]>(`posts/${postId}/comments`).then(res => res.data).catch(err => err)
  }
}