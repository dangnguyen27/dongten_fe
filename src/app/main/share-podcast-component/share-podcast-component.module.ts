import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAudioComponent } from './player-audio/player-audio.component';
import { SharePipeModule } from 'src/app/pipes/share-pipe.module';



@NgModule({
  declarations: [
    PlayerAudioComponent
  ],
  imports: [
    CommonModule,
    SharePipeModule
  ],
  exports: [
    PlayerAudioComponent
  ]
})
export class SharePodcastComponentModule { }
