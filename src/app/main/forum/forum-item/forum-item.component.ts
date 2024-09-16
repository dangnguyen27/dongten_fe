import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.scss']
})
export class ForumItemComponent implements OnInit{
  
  @Input() item: any;

  constructor() {

  }

  ngOnInit(): void {

  }

  
}
