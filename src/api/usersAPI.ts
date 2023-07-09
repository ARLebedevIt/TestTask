import { instanceAPI } from "./instanceAPI"

export const usersAPI = {
  getUsers(page: string) {
    return instanceAPI.get(`users?_page=${page}`).then(res => res.data).catch(err => err)
  },
  getCurrUser(id: string) {
    return instanceAPI.get(`users/${id}`).then(res => res.data).catch(err => err)
  }
}