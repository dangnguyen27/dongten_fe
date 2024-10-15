import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { CmsService } from 'src/app/services/cms.service';
import { ItemType } from 'src/app/utils/constants';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, AfterViewInit {
  public listCategory: any;

  public newest = [
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: '/assets/images/sample_forum.png'
    },
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: '/assets/images/sample_forum.png'
    },
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: ''
    },
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: '/assets/images/sample_forum.png'
    },
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: ''
    },
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: '/assets/images/sample_forum.png'
    },
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: '/assets/images/sample_forum.png'
    },
    {
      title: 'Con đường cũ, con đường mới',
      description: '“Thần tượng” một ai đó chính là sự quý trọng, ham mộ về tài năng hay ngoại hình,… Đó là kết quả của con người nhằm “…cổ võ một thứ linh đạo không có Thiên Chúa…” Hiện nay, hiện tượng fan cuồng không còn hiếm gặp, tin tức, báo chí đăng tin ...',
      category: {
        title: 'Người trẻ'
      },
      created_at: '10/09/2024',
      count_views: 600,
      count_comments: 20,
      user: {
        image: '/assets/images/sample_avatar.png',
        name: 'Mạc Vũ'
      },
      image: '/assets/images/sample_forum.png'
    }
  ]

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
    @Inject(PLATFORM_ID) private platformId: any,

    private readonly cmsService: CmsService
  ) {

  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.cmsService.getAllItems({item_type: ItemType.forum}).subscribe( (res: any) => {
      this.newest = res.data.items;
    })
    this.cmsService.getListTaxonomy({type: ItemType.forum}).subscribe( (res: any) => {
      this.listCategory = res.data.items;
    })
  }

  ngAfterViewInit(): void {    
    this.addJsToElement("/assets/js/masonry.pkgd.min.js");
  }

  addJsToElement(src: string): HTMLScriptElement {
    let script: any;
    if (isPlatformBrowser(this.platformId)) {
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      this._renderer2.appendChild(document.body, script);      
    }
    return script;
  }
}
