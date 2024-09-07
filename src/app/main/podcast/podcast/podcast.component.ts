import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {

  public newest = [
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

  public itemsByCategory = [

  ];

}
