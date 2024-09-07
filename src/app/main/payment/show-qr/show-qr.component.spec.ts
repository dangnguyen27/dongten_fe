import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQrComponent } from './show-qr.component';

describe('ShowQrComponent', () => {
  let component: ShowQrComponent;
  let fixture: ComponentFixture<ShowQrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowQrComponent]
    });
    fixture = TestBed.createComponent(ShowQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
