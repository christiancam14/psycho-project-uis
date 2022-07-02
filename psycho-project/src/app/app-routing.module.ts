import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importamos los componentes
/* import { BlogComponent } from './website/components/blog/blog.component';
import { FaqComponent } from './website/components/faq/faq.component';
import { HomeComponent } from './website/pages/home/home.component';
import { LoginComponent } from './website/pages/login/login.component';
import { ServicesComponent } from './website/pages/services/services.component';
import { SingupComponent } from './website/pages/singup/singup.component'; */
import { ErrorComponent } from './error/error.component';
//Libreria para la precarga de los modulos
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
  },{
    path: 'psy-admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },{
    path: 'psy-psychology',
    loadChildren: () => import('./psychologist/psychologist.module').then(m => m.PsychologistModule)
  },
  /* {path: '', component: HomeComponent},
  {path: 'servicios', component: ServicesComponent},
  {path: 'preguntas', component: FaqComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SingupComponent}, */
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
