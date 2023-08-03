import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from '../reducers/posts.reducer';

const postsFeatureSelector = createFeatureSelector<PostsState>('posts');

export const getPostsSelector = createSelector(postsFeatureSelector, (state) => state.posts);
export const getPostsState = createSelector(postsFeatureSelector, (state) => state);
