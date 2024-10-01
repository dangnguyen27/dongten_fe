import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player-audio',
  templateUrl: './player-audio.component.html',
  styleUrls: ['./player-audio.component.scss']
})
export class PlayerAudioComponent implements OnChanges {
  @Input() id: any
  url: any;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.url = `https://open.spotify.com/embed/episode/${this.id}`;
  }
}
