import { Component, OnInit } from '@angular/core';
import { CmsService } from 'src/app/services/cms.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  
  public newest = [
    {
      id: '1',
      taxonomy: {
        slug: '',
        title: ''
      },
      title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
      description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
      duration: 815597,
      release_date: "2024-09-06T01:09:31.000Z",
      image: "/assets/images/sample_podcast.png"
    },
    {
      id: '1',
      taxonomy: {
        slug: '',
        title: ''
      },
      title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
      description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
      duration: 815597,
      release_date: "2024-09-06T01:09:31.000Z",
      image: "/assets/images/sample_podcast.png"
    },
    {
      id: '1',
      taxonomy: {
        slug: '',
        title: ''
      },
      title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
      description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
      duration: 815597,
      release_date: "2024-09-06T01:09:31.000Z",
      image: "/assets/images/sample_podcast.png"
    },
    {
      id: '1',
      taxonomy: {
        slug: '',
        title: ''
      },
      title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
      description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
      duration: 815597,
      release_date: "2024-09-06T01:09:31.000Z",
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

  public itemsByCategory = [

  ];

  constructor(
    private readonly cmsService: CmsService
  ) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.cmsService.getNewestPodcast().subscribe(res => {
      this.newest = res.data.items;
    })
  }

}
