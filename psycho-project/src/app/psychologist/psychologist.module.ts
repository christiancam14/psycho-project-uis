import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistRoutingModule } from './psychologist-routing.module';
import { PsychoLoginComponent } from './pages/psycho-login/psycho-login.component';
import { PsychoHomeComponent } from './pages/psycho-home/psycho-home.component';


@NgModule({
  declarations: [
    PsychoLoginComponent,
    PsychoHomeComponent
  ],
  imports: [
    CommonModule,
    PsychologistRoutingModule
  ]
})
export class PsychologistModule { }
