import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from 'src/app/services/cms.service';
import { ItemType } from 'src/app/utils/constants';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss']
})
export class PostCategoryComponent implements OnInit {
	public list: any;
	slug: any;
	search = {
		page: 1,
		page_size: 20,
		item_type: ItemType.post
	}
	constructor(
		private readonly cmsService: CmsService,
		private readonly activedRoute: ActivatedRoute
	) {
		this.slug = this.activedRoute.snapshot.paramMap.get('slug');  		
	}
	
	ngOnInit(): void {
		this.getData();
	}

	getData() {		
		this.cmsService.getItemsByTaxonomy({...this.search, ...{slug: this.slug}}).subscribe((res: any) => {
			this.list  = res.data.items
		})
	}

}
