import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GraphQLModule } from '../core/graphql.module';

import { DataAccessService } from './data-access/services/data-access.service';
import { PostsComponent } from './posts.component';
import { reducer, PostsEffects } from './data-access/state';

const routes: Routes = [{ path: '', component: PostsComponent }];

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    GraphQLModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature(PostsEffects),
  ],
  exports: [PostsComponent],
  providers: [DataAccessService],
})
export class PostsModule {}
