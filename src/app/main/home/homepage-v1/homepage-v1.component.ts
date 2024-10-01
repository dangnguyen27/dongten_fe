import { Component, Renderer2, OnInit, Inject, AfterViewInit  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CmsService } from 'src/app/services/cms.service';
import { GroupCode, ItemType } from 'src/app/utils/constants';
import { combineLatest, forkJoin, from, merge, mergeMap } from 'rxjs';
@Component({
  selector: 'app-homepage-v1',
  templateUrl: './homepage-v1.component.html',
  styleUrls: ['./homepage-v1.component.scss']
})
export class HomepageV1Component implements OnInit, AfterViewInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
    private readonly cmsService: CmsService
  ) { }  
  public hotNews = [
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    },
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    },
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    }
  ]
  public newest = [
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    },
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    },
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    },
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    },
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    },
    {
      title: "25 dieu nguoi ta khong hieu ban lam gi",
      description: "Các tín hữu Công Giáo có rất nhiều nghi thức và truyền thống tốt đẹp đầy ý nghĩa, nhưng đối với những người không hiểu điều chúng ta làm thì đôi khi chúng có chút gì đó kỳ quặc. Không phải lúc nào ...",
      publish_date: '',
      category: 'Than hoc',
      image: '/assets/images/sample.jpeg'
    }
  ]

  dataLinhdao = [
    {
        place:'NHÀ LINH THAO',
        title:'',
        title2:'',
        description:'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
        image:'https://linhthao.net/wp-content/uploads/2021/11/249859372_2307522289389582_7808561198683873955_n-1536x1090-1.jpg'
    },
    {
        place:'LINH HƯỚNG CHỦNG VIỆN',
        title:'',
        title2:'',
        description:'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
        image:'https://sjjs.edu.vn/wp-content/uploads/2017/07/Hv.jpg'
    },
    {
        place:'LOAN BÁO TIN MỪNG',
        title:'',
        title2:'',
        description:'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
        image:'https://bantinconggiao.com/uploads/news/2022/6/28/gpbac-ninh-ban-loan-bao-tin-mung-giao-phan-cung-nhau-ban-bac-cho-mot-khoi-dau-moi.jpeg'
    },
    {
      place:'LOAN BÁO TIN MỪNG',
      title:'',
      title2:'',
      description:'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
      image:'https://bantinconggiao.com/uploads/news/2022/6/28/gpbac-ninh-ban-loan-bao-tin-mung-giao-phan-cung-nhau-ban-bac-cho-mot-khoi-dau-moi.jpeg'
    },
    {
      place:'LOAN BÁO TIN MỪNG',
      title:'',
      title2:'',
      description:'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
      image:'https://bantinconggiao.com/uploads/news/2022/6/28/gpbac-ninh-ban-loan-bao-tin-mung-giao-phan-cung-nhau-ban-bac-cho-mot-khoi-dau-moi.jpeg'
    }
]
  dataLienKet = [
    {
      image: '/assets/images/lienket/1.png'
    },
    {
      image: '/assets/images/lienket/2.png'
    },
    {
      image: '/assets/images/lienket/3.png'
    },
    {
      image: '/assets/images/lienket/4.png'
    },
    {
      image: '/assets/images/lienket/5.png'
    },
    {
      image: '/assets/images/lienket/6.png'
    },
    {
      image: '/assets/images/lienket/7.png'
    },
    {
      image: '/assets/images/lienket/8.png'
    },
    {
      image: '/assets/images/lienket/9.png'
    },
    {
      image: '/assets/images/lienket/10.png'
    },
    {
      image: '/assets/images/lienket/11.png'
    }
  ]

  dataLienKetOrder: any[] = [];

  slideConfig = {"slidesToShow": 5, "slidesToScroll": 2, "dots": false, "arrows": false};
  slideConfigMainSlide = { "dots": true, "arrows": false};

  public homeData: any = {};
  groupCode = GroupCode;
  newestPodcast: any;

  selectedIdEpisode: any;
  isShowPlayer: boolean = false;
  
  ngOnInit(): void {
    // let script = this._renderer2.createElement('script');
    //     // script.type = `application/ld+json`;        

    //     this._renderer2.appendChild(this._document.body, script);
    let indexOrder = 0;    
    for(let i =1; i<=this.dataLienKet.length; i++) {
      if(i <= 6*(indexOrder+1) ) {
        if(!this.dataLienKetOrder[indexOrder]) {
          this.dataLienKetOrder[indexOrder] = {
            items: [
              this.dataLienKet[i-1]
            ]
          }
        } else {
          this.dataLienKetOrder[indexOrder].items.push(this.dataLienKet[i-1])
        }        
      } else {
        indexOrder++;
        this.dataLienKetOrder[indexOrder] = {
          items: [
            this.dataLienKet[i-1]
          ]
        }
      }      
    }
    console.log(this.dataLienKetOrder);
    this.getData();
  }

  getData() {
    for (let code in GroupCode) {
      if (isNaN(Number(code))) {
      // promises.push(this.cmsService.getItemsByGroup({code: code}))
        // callApi[code] = this.cmsService.getItemsByGroup({code: code})
        let params = {code: code, page_size: 5, item_type: ItemType.post}
        if (code == GroupCode.TOP_HOME_NEWEST) {
          params.page_size = 9
        } else if (code == GroupCode.HOME_PRAYER) {
          params.page_size = 1
        } else if (code == GroupCode.HOME_SUYTU_POST || code == GroupCode.HOME_LINHDAO_POST) {
          params.page_size = 6
        } else if (code == GroupCode.HOME_NEWS) {
          params.page_size = 8
        }
        this.cmsService.getItemsByGroup(params).subscribe(res => {
          this.homeData[code] = res.data;
        })
      }
    }

    this.cmsService.getNewestPodcast({page_size: 10}).subscribe(res => {
      this.newestPodcast = res.data.items;
    })
    
    console.log(this.homeData);
  }

  onShowPlayer(id: any) {
    this.selectedIdEpisode = id;
    this.isShowPlayer = true;
  }

  closePlayer() {
    this.isShowPlayer = false;
  }

  ngAfterViewInit(): void {
    this.addJsToElement("/assets/js/gsap.min.js");
    this.addJsToElement("/assets/js/animate-slide.js");
    this.addJsToElement("/assets/js/TweenMax.min.js");
    // this.addJsToElement("/assets/js/tweenslide.js");
    this.addJsToElement("/assets/js/top-home-animate-slideshow.js");
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this._renderer2.appendChild(document.body, script);
    return script;
  }

}
