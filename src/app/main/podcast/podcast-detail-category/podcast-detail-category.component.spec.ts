import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastDetailCategoryComponent } from './podcast-detail-category.component';

describe('PodcastDetailCategoryComponent', () => {
  let component: PodcastDetailCategoryComponent;
  let fixture: ComponentFixture<PodcastDetailCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastDetailCategoryComponent]
    });
    fixture = TestBed.createComponent(PodcastDetailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
