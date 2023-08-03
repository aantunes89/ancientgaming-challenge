import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Apollo } from 'apollo-angular';

import { getPostsQuery, getPostsQueryVariables } from './queries';
import { Post } from '../../domain/post.interface';

interface PostsQueryWrapper {
  posts: { data: Post[] };
}

@Injectable()
export class DataAccessService {
  constructor(private readonly apollo: Apollo) {}

  getPosts(): Observable<Post[]> {
    const variables = { ...getPostsQueryVariables };
    const query = { ...getPostsQuery };

    return this.apollo
      .query<PostsQueryWrapper>({ query, variables })
      .pipe(map((el) => el.data.posts.data));
  }
}
