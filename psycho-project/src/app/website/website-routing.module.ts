import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
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
    component: ServicesComponent
  },
  {
    path: 'preguntas',
    component: FaqComponent
  },
  {
    path: 'blog',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
