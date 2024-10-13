import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageV1Component } from './homepage-v1/homepage-v1.component';
import { Routes, RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StripHtmlTagPipe } from 'src/app/pipes/stripHtmlTag.pipe';
import { ConvertSecondDurationPipe } from 'src/app/pipes/convertSecondDuration.pipe';
import { SharePipeModule } from 'src/app/pipes/share-pipe.module';
import { SharePodcastComponentModule } from '../share-podcast-component/share-podcast-component.module';
import { PostCategoryComponent } from './post-category/post-category.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ShareComponentModule } from '../share-component/share-component.module';

const routes: Routes = [
  {
    path: '',
    component: HomepageV1Component
  },
  {
    path: 'category/:slug',
    component: PostCategoryComponent
  },
  {
    path: ':slug',
    component: PostDetailComponent
  }
];

@NgModule({
  declarations: [
    HomepageV1Component,
    PostCategoryComponent,
    PostDetailComponent
  ],
  
  imports: [
    CommonModule,
    NgbCarouselModule,
    BlockUIModule.forRoot(),
    RouterModule.forChild(routes),
    SlickCarouselModule,
    SharePipeModule,
    SharePodcastComponentModule,
    ShareComponentModule
  ],
  providers: [
  ],
})
export class HomeModule { }

