import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastListCategoryComponent } from './podcast-list-category/podcast-list-category.component';
import { PodcastDetailCategoryComponent } from './podcast-detail-category/podcast-detail-category.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomepageV1Component } from '../home/homepage-v1/homepage-v1.component';
import { ConvertSecondDurationPipe } from 'src/app/pipes/convertSecondDuration.pipe';
import { SafeUrlPipe } from 'src/app/pipes/safe-url.pipe';
import { SharePipeModule } from 'src/app/pipes/share-pipe.module';
import { SharePodcastComponentModule } from '../share-podcast-component/share-podcast-component.module';


const routes: Routes = [
  {
    path: '',
    component: PodcastComponent
  },
  {
    path: 'categories',
    component: PodcastListCategoryComponent
  },
  {
    path: 'categories/:slug',
    component: PodcastDetailCategoryComponent
  },
  {
    path: ':slug',
    component: PodcastDetailComponent
  },
];

@NgModule({
  declarations: [
    PodcastComponent,
    PodcastListCategoryComponent,
    PodcastDetailCategoryComponent,
    PodcastDetailComponent,
  ],
  
  imports: [
    CommonModule,        
    RouterModule.forChild(routes),
    SlickCarouselModule,
    SharePipeModule,
    SharePodcastComponentModule
  ],
  providers: [
  ],
})

export class PodcastModule { }
