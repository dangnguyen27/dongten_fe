import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastListCategoryComponent } from './podcast-list-category.component';

describe('PodcastListCategoryComponent', () => {
  let component: PodcastListCategoryComponent;
  let fixture: ComponentFixture<PodcastListCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastListCategoryComponent]
    });
    fixture = TestBed.createComponent(PodcastListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
