import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ForumCategoryComponent } from './forum-category/forum-category.component';
import { ForumPostDetailComponent } from './forum-post-detail/forum-post-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ForumItemComponent } from './forum-item/forum-item.component';
import { FormsModule } from '@angular/forms';
import { ShareComponentModule } from '../share-component/share-component.module';
import { SharePipeModule } from 'src/app/pipes/share-pipe.module';

const routes: Routes = [
  {
    path: 'home',
    component: ForumComponent
  },
  {
    path: 'category/:slug',
    component: ForumCategoryComponent
  },
  {
    path: ':slug',
    component: ForumPostDetailComponent
  }
];


@NgModule({
  declarations: [
    ForumComponent,
    ForumCategoryComponent,
    ForumPostDetailComponent,
    ForumItemComponent
  ],
  imports: [    
    CommonModule,        
    RouterModule.forChild(routes),
    FormsModule,
    SlickCarouselModule,
    ShareComponentModule,
    SharePipeModule
  ]
})
export class ForumModule { }
