import { FETCH_POSTS, FETCH_MORE_POSTS } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.posts
    case FETCH_MORE_POSTS:
      const posts = state
      return posts.concat(action.payload.data.posts)
    default:
      return state
  }
}
