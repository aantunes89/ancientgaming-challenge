import { Component, inject } from '@angular/core';
import { Observable, filter, map, tap } from 'rxjs';
import { Post } from './domain/post.interface';

import { PostsActions, PostsSelectors } from './data-access/state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  private readonly store = inject(Store);

  posts$: Observable<Post[] | null> = this.store.select(PostsSelectors.getPostsSelector);

  ngOnInit() {
    this.store.dispatch(PostsActions.getPosts());
  }
}
