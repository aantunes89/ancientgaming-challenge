import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/posts/domain/post.interface';
import * as PostsActions from '../actions/posts.actions';

export interface PostsState {
  posts: any;
  isLoading: boolean;
  selectedPost: Post | null;
}

type State = PostsState;

const initialState: State = {
  posts: null,
  isLoading: false,
  selectedPost: null,
};

const postReducer = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, { posts }) => ({ ...state, posts, isLoading: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return postReducer(state, action);
}
