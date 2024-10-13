import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    ContentHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // NgbModule,
  ],
  exports: [
    BreadcrumbComponent,
    ContentHeaderComponent
  ]
})
export class ShareComponentModule { }
