import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Song } from 'src/app/models/Song';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.component.html',
  styleUrls: ['./song-modal.component.scss'],
})
export class SongModalComponent implements OnInit {
  songForm!: FormGroup;
  songs: Song[] = [];
  spotifyGenres: string[] = [];

  constructor(private modalController: ModalController, 
              private formBuilder: FormBuilder,
              private spotifyService: SpotifyService,
              private toastController:ToastController) {
   
  }
  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['', Validators.required],
      year: ['', Validators.required],
      genre: ['', Validators.required]
    });
    this.loadSpotifyGenres();
  }

  loadSpotifyGenres() {
    this.spotifyService.getSpotifyGenres().subscribe((data: any) => {
      
      this.spotifyGenres = data; 
      if (this.spotifyGenres.length > 0) {
        this.songForm?.get('genre')?.setValue(this.spotifyGenres[0]);
      }
    });
  }

  addSong() {
    if (!this.songForm.valid) {
      this.presentToast('los campos con * son obligatorios','danger');
      return ;
    }
     
    this.songs.push(this.songForm.value);
    this.clearForm();
  }

  clearForm() {
    this.songForm.setValue({
      title: null,
      artist: null,
      album: null,
      year: null,
      genre: null
    });
  }
  
  
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, 
      color: color
    });
    toast.present();
  }

  removeSong(song: Song) {
    this.songs = this.songs.filter(item => item !== song);
  }

  closeModal() {
    this.modalController.dismiss(this.songs);
  }

}
