import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from 'src/app/services/cms.service';
import { ItemType, TaxonomyType } from 'src/app/utils/constants';

@Component({
	selector: 'app-post-detail',
	templateUrl: './post-detail.component.html',
	styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
	slug: any;
	data: any;
	contentHeader = {
		headerTitle: 'Danh sách',
		actionButton: true,
		breadcrumb: {
			type: '',
			links: [
				{
					name: 'Trang chủ',
					isLink: true,
					link: '/'
				},				
			]
		}
	};
	listTag: any;
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
		this.cmsService.getDetailItem(this.slug, ItemType.post).subscribe(res => {
			this.data = res.data.item;
			const listCategory = res.data.item.item_taxonomies.filter( (x: any) => x.taxonomy.type == TaxonomyType.CATEGORY)
			
			this.listTag = res.data.item.item_taxonomies.filter( (x: any) => x.taxonomy.type == TaxonomyType.TAG)
			console.log("x",listCategory, this.listTag);
			this.contentHeader.breadcrumb.links.push({
				name: listCategory[0].title,
				isLink: true,
				link: '/category/' + listCategory[0].slug
			})
		})
	}

}
