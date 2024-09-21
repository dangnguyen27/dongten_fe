import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from 'src/app/services/cms.service';

@Component({
  selector: 'app-podcast-detail-category',
  templateUrl: './podcast-detail-category.component.html',
  styleUrls: ['./podcast-detail-category.component.scss']
})
export class PodcastDetailCategoryComponent implements OnInit {
  
  public category = {
    name: "365 ngày với Lời",
    icon: [
      {
        url: "/assets/images/sample_podcast_category.png"
      }
    ]
  }

  public items = [
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
  slug: string = '';
  detailItem: any;
  constructor(
    private readonly cmsService: CmsService,
    private readonly activedRoute: ActivatedRoute
  ) {
    this.activedRoute.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
  }

  getData() {

  }
}
