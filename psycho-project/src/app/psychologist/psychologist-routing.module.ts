import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychoLoginComponent } from './pages/psycho-login/psycho-login.component';
import { PsychoHomeComponent } from './pages/psycho-home/psycho-home.component';
import { PsychologistLayoutComponent } from './components/psychologist-layout/psychologist-layout.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component'
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: PsychologistLayoutComponent,
    children: [
      {
        path: 'home',
        component: PsychoHomeComponent
      },
      {
        path: 'workshops',
        component: WorkshopsComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'appointments',
        component: AppointmentsComponent
      },
      {
        path: 'login',
        component: PsychoLoginComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistRoutingModule { }
