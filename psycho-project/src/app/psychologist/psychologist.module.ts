import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistRoutingModule } from './psychologist-routing.module';
import { PsychoLoginComponent } from './pages/psycho-login/psycho-login.component';
import { PsychoHomeComponent } from './pages/psycho-home/psycho-home.component';
import { PsychologistLayoutComponent } from './components/psychologist-layout/psychologist-layout.component';
import { PsychologistHeaderComponent } from './components/psychologist-header/psychologist-header.component';
import { PsychologistFooterComponent } from './components/psychologist-footer/psychologist-footer.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CarouselModule } from 'primeng/carousel';
import {MessagesModule} from 'primeng/messages';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [
    PsychoLoginComponent,
    PsychoHomeComponent,
    PsychologistLayoutComponent,
    PsychologistHeaderComponent,
    PsychologistFooterComponent,
    AppointmentsComponent,
    WorkshopsComponent,
    FaqsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ConfirmPopupModule,
    PsychologistRoutingModule,
    CarouselModule,
    MessagesModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
    
  ],
  providers: [CookieService, ConfirmationService, MessageService ],
})
export class PsychologistModule { }
