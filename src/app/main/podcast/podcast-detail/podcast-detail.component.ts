import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from 'src/app/services/cms.service';

@Component({
	selector: 'app-podcast-detail',
	templateUrl: './podcast-detail.component.html',
	styleUrls: ['./podcast-detail.component.scss']
})
export class PodcastDetailComponent implements OnInit {
	public item = {
		title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
		description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
		duration: 815597,
		release_date: "2024-09-06T01:09:31.000Z",
		image: "/assets/images/sample_podcast.png"
	}

	public relatedItems = [
		{
			title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
			description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
			duration: 815597,
			created: "2024-09-06T01:09:31.000Z",
			image: "/assets/images/sample_podcast.png"
		},
		{
			title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
			description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
			duration: 815597,
			created: "2024-09-06T01:09:31.000Z",
			image: "/assets/images/sample_podcast.png"
		},
		{
			title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
			description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
			duration: 815597,
			created: "2024-09-06T01:09:31.000Z",
			image: "/assets/images/sample_podcast.png"
		},
		{
			title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
			description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
			duration: 815597,
			created: "2024-09-06T01:09:31.000Z",
			image: "/assets/images/sample_podcast.png"
		}
	];

	slug: any;
	detailItem: any;
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
		this.cmsService.getSingplePodcastEpisode({ id: this.slug, platform: 'spotify' }).subscribe(res => {
			this.item = res.data;
		})
	}
}
