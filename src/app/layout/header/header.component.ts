import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { AuthenService } from 'src/app/services/authen.service';
import { CmsService } from 'src/app/services/cms.service';
import { SocketService } from 'src/app/services/socket.service';
import { GroupCode, GroupMenuCode, MenuShowType, TaxonomyType } from 'src/app/utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('modalSearch') modalSearch: any;

  modalRef: any;
  public listNews = [
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
  ];
  listMenusLeft: any;
  listMenusRight: any;
  logoMenu: any;
  idDisplay: any;
  currentUser: any;
  subAuthen: any;
  subSocket: any;
  constructor(
    private modalService: NgbModal,
    private readonly cmsService: CmsService,
    private readonly authenService: AuthenService,
    private readonly socketService: SocketService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) {
    this.subAuthen = this.authenService.currentUser.subscribe((res: any) => {
      this.currentUser = res;
      if(this.currentUser && this.currentUser.token) {
        this.socketService.start(this.currentUser.token);
        this.subSocket = this.socketService.getNewNotify().subscribe(res => {
          console.log(res);
          if(res) {
            const toastr = this.toastrService.info(res.message, '', {timeOut: 5500, closeButton: true})
            toastr.onTap.subscribe( (action) => {
              console.log("click toast");
              this.router.navigateByUrl(`/forum/${res.item.slug}`)
            })
          }      
        })
      }
    })
  }
  ngOnDestroy(): void {
    if(this.subAuthen) {
      this.subAuthen.unsubscribe();
    }
    if(this.subSocket) {
      this.subSocket.unsubscribe();
    }        
  }

  ngOnInit(): void {
    this.getData();
       
  }

  modalClose() {
    this.modalRef.close();
  }

  logOut() {
    this.authenService.theUser = null;    
  }

  getData() {
    this.cmsService.getTaxonomiesByGroup({
      code: GroupMenuCode.MAIN_MENU,
      item_type: TaxonomyType.MENU,
      page_size: -1
    }).subscribe(res => {
      let listMenus = res.data.items.filter((x: any) => x.menu_item_show_type != MenuShowType.LOGO);
      
      this.logoMenu = res.data.items.find((x: any) => x.menu_item_show_type == MenuShowType.LOGO);
      this.listMenusLeft = listMenus.slice(0, Math.floor(listMenus.length / 2));
      this.listMenusRight = listMenus.slice(Math.floor(listMenus.length / 2), listMenus.length);
      console.log("listMenus", listMenus, this.listMenusRight);
    })
  }

  getJsonValue(text: string, key: string) {
    if(!text) {
      return null;
    }
    try {
      const obj = JSON.parse(text);
      return obj[key] ? obj[key] : null;
    } catch (error) {
      return null;
    }
  }

  filterHasChilds(items: any, has: boolean = true) {
    if(has) {
      return items.filter((x: any)=> x.childs.length > 0)
    } else {
      return items.filter((x: any)=> x.childs.length < 1)
    }    
  }

  onOpenSearch() {
    this.modalRef = this.modalService.open(this.modalSearch, {
      centered: true,
      windowClass: 'modal modal-primary',
      size: 'xl'
    });
  }

  onClickMenu() {
    console.log('x');
  }

  onHoverItemMega3(item: any) {
    this.idDisplay = item.id;
  }

  onLeaveItemMega3() {
    this.idDisplay = null
  }
}
