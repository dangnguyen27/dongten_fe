import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
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
  ]

  constructor(
    private modalService: NgbModal
  ) {

  }

  ngOnInit(): void {
    
  }

  modalClose() {
    this.modalRef.close();
  }

  onOpenSearch() {
    this.modalRef = this.modalService.open(this.modalSearch, {
      centered: true,
      windowClass: 'modal modal-primary',
      size: 'xl'
    });
  }
}
