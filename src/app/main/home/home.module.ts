import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageV1Component } from './homepage-v1/homepage-v1.component';
import { Routes, RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: HomepageV1Component
  },
];

@NgModule({
  declarations: [
    HomepageV1Component
  ],
  
  imports: [
    CommonModule,
    NgbCarouselModule,
    BlockUIModule.forRoot(),
    RouterModule.forChild(routes),
    SlickCarouselModule
  ],
  providers: [
  ],
})
export class HomeModule { }

