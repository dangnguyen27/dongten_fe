import { Component, OnInit } from '@angular/core';
import { CmsService } from 'src/app/services/cms.service';
import { TaxonomyType } from 'src/app/utils/constants';

@Component({
  selector: 'app-podcast-list-category',
  templateUrl: './podcast-list-category.component.html',
  styleUrls: ['./podcast-list-category.component.scss']
})
export class PodcastListCategoryComponent implements OnInit {
  
  public categories: any = [];

  constructor(
    private readonly cmsService: CmsService
  ) {

  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.cmsService.getListTaxonomy({page_size: -1, type: TaxonomyType.PODCAST}).subscribe(res => {
      this.categories = res.data.items;
    })
  }

}
