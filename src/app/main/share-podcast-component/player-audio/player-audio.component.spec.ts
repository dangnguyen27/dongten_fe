import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAudioComponent } from './player-audio.component';

describe('PlayerAudioComponent', () => {
  let component: PlayerAudioComponent;
  let fixture: ComponentFixture<PlayerAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerAudioComponent]
    });
    fixture = TestBed.createComponent(PlayerAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
