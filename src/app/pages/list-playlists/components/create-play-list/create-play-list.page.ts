import { Component, OnInit } from '@angular/core';
  import { ModalController, ToastController} from '@ionic/angular';
import { Song } from 'src/app/models/Song';
import { SongModalComponent } from '../song-modal/song-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayList } from 'src/app/models/PlayList';
import { PlaylistService } from 'src/app/services/playlist.service';
  
@Component({
  selector: 'app-create-play-list',
  templateUrl: './create-play-list.page.html',
  styleUrls: ['./create-play-list.page.scss'],
})
export class CreatePlayListPage implements OnInit {
  
  song! :Song
  songsForm!: FormGroup;
  songs: Song[] = [];
  playList!:PlayList;
  
    constructor(private modalController: ModalController, 
      private formBuilder: FormBuilder,
      private toastController:ToastController,
      private playlistService:PlaylistService) {
     
    }

    ngOnInit() {
      this.songsForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: [''],
      });
    }

  
    async openSongModal() {
      const modal = await this.modalController.create({
        component: SongModalComponent
      });
  
      modal.onDidDismiss().then((data) => {
        if (data.data) {
          const newSongs: Song[] = data.data;
          this.songs = [...this.songs, ...newSongs];
        }
      });
  
      await modal.present();
    }
  
    onSubmit() {
      if (this.songsForm.valid) {
        this.playList = {
          ...this.songsForm.value,
          songs:this.songs
        }
        
        this.playlistService.createPlaylist(this.playList).subscribe(
          (response) => {
            if(response){
              this.presentToast('¡Guardado exitoso!', 'success');
            }
          },
          (error) => {
            this.presentToast('Error al guardar la playlist', 'danger');
          }
        );
      }
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
  
  
  