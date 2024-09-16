import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-forum-category',
  templateUrl: './forum-category.component.html',
  styleUrls: ['./forum-category.component.scss']
})
export class ForumCategoryComponent  implements OnInit, AfterViewInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
  ) {

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {    
    this.addJsToElement("/assets/js/masonry.pkgd.min.js");
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this._renderer2.appendChild(document.body, script);
    return script;
  }

}
