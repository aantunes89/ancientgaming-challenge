import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/posts/domain/post.interface';

export const getPosts = createAction('GET POSTS');
export const getPostsSuccess = createAction('GET POSTS SUCCESS', props<{ posts: Post[] | any }>());
export const getPostsFailure = createAction(
  'GET POSTS FAILURE',
  props<{ error: HttpErrorResponse }>()
);
