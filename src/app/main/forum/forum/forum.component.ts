import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  public listCategory = [
    {
      title: 'Hỏi - Đáp',
      count_post: 1000,
      count_comment: 5000,
      image: '/assets/images/hoi_dap.png'
    },
    {
      title: 'Văn Kiện',
      count_post: 1000,
      count_comment: 5000,
      image: '/assets/images/van_kien.png'
    },
    {
      title: 'Truyền Giáo',
      count_post: 1000,
      count_comment: 5000,
      image: '/assets/images/truyen_giao.png'
    },
    {
      title: 'Tài Liệu',
      count_post: 1000,
      count_comment: 5000,
      image: '/assets/images/tai_lieu.png'
    },
    {
      title: 'Kinh Thánh',
      count_post: 1000,
      count_comment: 5000,
      image: '/assets/images/kinh_thanh.png'
    },
    {
      title: 'Giáo Hội',
      count_post: 1000,
      count_comment: 5000,
      image: '/assets/images/giao_hoi.png'
    }
  ]
}
