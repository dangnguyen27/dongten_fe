import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss']
})
export class PodcastDetailComponent {
  public item = {
    title: "VỪA ĐIẾC VỪA NGỌNG | MANNA CN23TNB",
    description: "Nunc luctus gravida interdum. Phasellus leo leo, tristique quis interdum pretium, maximus in",
    duration: 815597,
    created: "2024-09-06T01:09:31.000Z",
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
}
