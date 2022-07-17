import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { UserGuardGuard } from '../guards/user-guard.guard';
import { VigilanteGuard } from '../vigilante.guard';
import { StudentLogGuard } from '../student-log.guard';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PreHeaderPageComponent } from './pages/pre-header-page/pre-header-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'servicios',
        component: ServicesComponent,
        canActivate: [VigilanteGuard]
      },
      {
        path: 'preguntas',
        component: FaqComponent
      },
      {
        path: 'blog',
        component: BlogComponent,
        canActivate: [VigilanteGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [StudentLogGuard]
      },
      {
        path: 'singup',
        component: SingupComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [VigilanteGuard]
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
        canActivate: [VigilanteGuard]
      },
      {
        path: 'pre-header-section',
        component: PreHeaderPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
