import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataAccessService } from '../../services/data-access.service';
import { map, switchMap } from 'rxjs';

import * as PostActions from '../actions/posts.actions';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.getPosts),
      switchMap(() =>
        this.dataAccess
          .getPosts()
          .pipe(map((result) => PostActions.getPostsSuccess({ posts: result })))
      )
    );
  });

  constructor(private readonly actions$: Actions, private readonly dataAccess: DataAccessService) {}
}
