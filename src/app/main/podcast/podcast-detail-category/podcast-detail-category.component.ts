import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from 'src/app/services/cms.service';

@Component({
  selector: 'app-podcast-detail-category',
  templateUrl: './podcast-detail-category.component.html',
  styleUrls: ['./podcast-detail-category.component.scss']
})
export class PodcastDetailCategoryComponent implements OnInit {
  
  public category: any;

  public items: any;
  public highlightCategory = [
    {
      name: "365 ngày với Lời",
      icon: [
        {
          url: "/assets/images/sample_podcast_category.png"
        }
      ]
    },
    {
      name: "365 ngày với Lời",
      icon: [
        {
          url: "/assets/images/sample_podcast_category.png"
        }
      ]
    },
    {
      name: "365 ngày với Lời",
      icon: [
        {
          url: "/assets/images/sample_podcast_category.png"
        }
      ]
    },
    {
      name: "365 ngày với Lời",
      icon: [
        {
          url: "/assets/images/sample_podcast_category.png"
        }
      ]
    }
  ];
  slug: any;
  selectedIdEpisode: any;
  isShowPlayer: boolean = false;

  constructor(
    private readonly cmsService: CmsService,
    private readonly activedRoute: ActivatedRoute
  ) {
    this.slug = this.activedRoute.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.getData();
  }

  onShowPlayer(id: any) {
    this.selectedIdEpisode = id;
    this.isShowPlayer = true;
  }

  closePlayer() {
    this.isShowPlayer = false;
  }

  getData() {
    this.cmsService.getDetailTaxonomy({slug: this.slug}).subscribe(res => {
      this.category = res.data;
    });

    this.cmsService.getListEpisodePodcast({slug: this.slug, page_size: 10}).subscribe(res => {
      this.items = res.data.items;
    })
  }
}
