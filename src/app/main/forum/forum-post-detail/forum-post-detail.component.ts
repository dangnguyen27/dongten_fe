import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from 'src/app/services/cms.service';
import { SocketService } from 'src/app/services/socket.service';
import { ItemType } from 'src/app/utils/constants';

@Component({
  selector: 'app-forum-post-detail',
  templateUrl: './forum-post-detail.component.html',
  styleUrls: ['./forum-post-detail.component.scss']
})
export class ForumPostDetailComponent implements OnInit, OnDestroy {
  public data: any = {
    title: 'Con đã từng quên có một Thiên Chúa yêu con như thế!',
    body: `<p style="text-align: justify;"><span style="font-size: 19px;">Trong một thế giới mà những gì thuộc về vật chất và thiêng liêng thường được coi là đối lập nhau, chính thể thao nhắc nhớ chúng ta về sự hội nhất tự nhiên giữa thể xác, tâm trí và thiêng liêng. Với ý thức như vậy, luyện tập thể thao chính là một cơ hội tuyệt vời để thấy được sự hiện diện của Chúa, và trưởng thành hơn về nhân đức. Không chỉ giữ gìn vóc dáng, thể thao còn là một hoạt động làm phong phú thêm đời sống thiêng liêng và kéo chúng ta đến gần hơn với Chúa Kitô.</span></p>`,
    comments: [
      {
        title: 'Tạ ơn',
        body: 'Xin hết lòng tạ ơn Chúa',
        created_at: '2024-10-03',
        user: {
          name: 'Jos D',
          image: '/assets/images/sample_avatar.png'
        },
        childs: []
      }
    ],
    user: {
      name: 'Jos D',
      image: '/assets/images/sample_avatar.png'
    },
    created_at: '2024-10-01'
  }
  slug: any;
  searchComment = {
    id: '',
    page: 1,
    page_size: 30
  }
  comments: any;
  totalComment: any;
  commentBody: any;
  subComment: any;
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
    private readonly activedRoute: ActivatedRoute,
    private readonly cmsService: CmsService,
    private readonly socketService: SocketService
  ) {
    this.slug = this.activedRoute.snapshot.paramMap.get('slug');
  }
  ngOnDestroy(): void {
    if(this.subComment) {
      this.subComment.unsubscribe();
    }    
  }
  ngOnInit(): void {
    this.getData();
    this.subComment = this.socketService.getNewComment().subscribe((res: any) => {
      console.log(res);
      if(res) {
        this.comments.push(res.data)
      }      
    })
  }

  getData() {
    this.cmsService.getDetailItem(this.slug, ItemType.forum).subscribe(res => {
      this.data = res.data.item;
      this.contentHeader.headerTitle = this.data.title;
      this.contentHeader.breadcrumb.links.push({
        name: this.data.item_taxonomies[0].taxonomy.title,
        isLink: true,
        link: '/forum/category/' + this.data.item_taxonomies[0].taxonomy.slug
      })
      this.cmsService.getComments(this.data.id, this.searchComment).subscribe(res => {
        this.comments = res.data.items;
        this.totalComment = res.data.count;
      })
    })
  }

  onPostComment() {
    const data = {
      item_id: this.data.id,
      body: this.commentBody
    }
    this.commentBody = ''
    console.log("onPostComment", data);
    this.cmsService.postComment(data).subscribe(res => {
      this.getData();
    }, error => {
      console.log(error);
    })
  }

}
