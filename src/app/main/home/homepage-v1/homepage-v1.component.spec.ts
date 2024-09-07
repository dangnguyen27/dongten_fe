import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageV1Component } from './homepage-v1.component';

describe('HomepageV1Component', () => {
  let component: HomepageV1Component;
  let fixture: ComponentFixture<HomepageV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
