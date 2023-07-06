import { PostType } from "../types/postsTS"
import { instanceAPI } from "./instanceAPI"

export const usersAPI = {
  getUsers(num: number = 2) {
    return instanceAPI.get(`users?page=${10}`).then(res => res.data).catch(err => err)
  },
  getCurrUser(id: number) {
    return instanceAPI.get(`users/${id}`).then(res => res.data).catch(err => err)
  }
}