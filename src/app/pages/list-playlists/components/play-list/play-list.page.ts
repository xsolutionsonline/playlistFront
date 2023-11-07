import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PlayList } from 'src/app/models/PlayList';
import { PlaylistSongsModaComponent } from '../playlist-songs-moda/playlist-songs-moda.component';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.page.html',
  styleUrls: ['./play-list.page.scss'],
})
export class PlayListPage implements OnInit {
  playlists!: PlayList[];
  searchText: string = '';

  constructor(private modalController: ModalController,
    private playlistService: PlaylistService,
    private toastController: ToastController) {}

  ngOnInit() {
    this.getAllPlaylists();
  }

  ionViewWillEnter() {
    this.getAllPlaylists();
  }

  async getAllPlaylists() {
    this.searchText = '';
    await this.playlistService.getAllPlaylists().subscribe(data => {
      this.playlists = data;
      
    });
  }

  deletePlaylist(playlistName: string) {
    this.playlistService.deletePlaylist(playlistName).subscribe(
      () => {
        this.presentToast('¡Playlist eliminada!', 'success');
        this.getAllPlaylists();
      },
      (error) => {
        this.presentToast('Error al eliminar la playlist', 'danger');        
      }
    );
  }

  searchPlaylist() {
    if (this.searchText) {
      this.playlistService.searchPlaylistByName(this.searchText).subscribe(
        (data: any) => {
          this.playlists = [data]; 
          this.presentToast('¡lista encontrada!', 'success');
        },
        (error) => {
          if(error.error === 'Playlist not found'){
            this.playlists = []
            this.presentToast('lista no encontrada', 'danger');
          }
          
        }
      );
    } else {
      this.getAllPlaylists();
    }
  }

  async openSongsModal(playlist:PlayList) {
    const modal = await this.modalController.create({
      component: PlaylistSongsModaComponent,
      componentProps: {
        songs: playlist.songs
      }
    });
    return await modal.present();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, 
      color: color
    });
    toast.present();
  }

}
