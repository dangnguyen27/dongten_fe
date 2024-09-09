import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ForumCategoryComponent } from './forum-category/forum-category.component';
import { ForumPostDetailComponent } from './forum-post-detail/forum-post-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent
  }
];


@NgModule({
  declarations: [
    ForumComponent,
    ForumCategoryComponent,
    ForumPostDetailComponent
  ],
  imports: [    
    CommonModule,        
    RouterModule.forChild(routes),
    SlickCarouselModule
  ]
})
export class ForumModule { }
