import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Song } from 'src/app/models/Song';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.component.html',
  styleUrls: ['./song-modal.component.scss'],
})
export class SongModalComponent implements OnInit {
  songForm!: FormGroup;
  songs: Song[] = [];

  constructor(private modalController: ModalController, 
              private formBuilder: FormBuilder) {
   
  }
  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      title: ['', Validators.required],
      artist: [''],
      album: [''],
      year: [''],
      genre: ['']
    });
  }

  addSong() {
    if (!this.songForm.valid) {
      console.log('El formulario no es válido');
      return ;
    }
     
    this.songs.push(this.songForm.value);
    this.songForm.reset();
  }

  removeSong(song: Song) {
    this.songs = this.songs.filter(item => item !== song);
  }

  closeModal() {
    this.modalController.dismiss(this.songs);
  }

}
