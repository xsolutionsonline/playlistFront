import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreatePlayListPageRoutingModule } from './create-play-list-routing.module';

import { CreatePlayListPage } from './create-play-list.page';
import { SongModalComponent } from '../song-modal/song-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreatePlayListPageRoutingModule
  ],
  declarations: [CreatePlayListPage,SongModalComponent]
})
export class CreatePlayListPageModule {}
