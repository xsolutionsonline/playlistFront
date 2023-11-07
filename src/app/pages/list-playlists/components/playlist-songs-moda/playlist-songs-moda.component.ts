import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Song } from 'src/app/models/Song';

@Component({
  selector: 'app-playlist-songs-moda',
  templateUrl: './playlist-songs-moda.component.html',
  styleUrls: ['./playlist-songs-moda.component.scss'],
})
export class PlaylistSongsModaComponent {

  @Input() songs!: Song[];

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

}
