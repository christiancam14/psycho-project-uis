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

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/psy-psychology/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'servicios',
        component: ServicesComponent
      },
      {
        path: 'preguntas',
        component: FaqComponent
      },
      {
        path: 'blog',
        canActivate: [ UserGuardGuard ],
        component: BlogComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'singup',
        component: SingupComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
