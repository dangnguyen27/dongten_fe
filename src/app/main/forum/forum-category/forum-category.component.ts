import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from 'src/app/services/cms.service';

@Component({
  selector: 'app-forum-category',
  templateUrl: './forum-category.component.html',
  styleUrls: ['./forum-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForumCategoryComponent  implements OnInit, AfterViewInit {
  slug: any;
  search = {
    page: 1,
    page_size: 16
  }
  list: any;
  total: any;

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
        {
          name: 'Diễn Đàn',
          isLink: true,
          link: '/forum/home'
        },
        {
          name: 'Chuyên mục',
          isLink: false,          
        },
      ]
    }
  };

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    
    private readonly activedRoute: ActivatedRoute,
    private readonly cmsService: CmsService
  ) {
    this.slug = this.activedRoute.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.cmsService.getItemsByTaxonomy({...this.search, ...{slug: this.slug}}).subscribe( (res: any) => {
      this.list = res.data.items;
      this.total = res.data.count;
    });
    this.cmsService.getDetailTaxonomy({slug: this.slug}).subscribe(res => {
      this.contentHeader.headerTitle = res.data.taxonomy.title;
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
