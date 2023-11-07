import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlayListPageRoutingModule } from './create-play-list-routing.module';

import { CreatePlayListPage } from './create-play-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlayListPageRoutingModule
  ],
  declarations: [CreatePlayListPage]
})
export class CreatePlayListPageModule {}
