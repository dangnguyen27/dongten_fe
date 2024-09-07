import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ForumCategoryComponent } from './forum-category/forum-category.component';
import { ForumPostDetailComponent } from './forum-post-detail/forum-post-detail.component';



@NgModule({
  declarations: [
    ForumComponent,
    ForumCategoryComponent,
    ForumPostDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ForumModule { }
