import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HeaderComponent } from './components/header/header.component';

import { WebsiteRoutingModule } from './website-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    FaqComponent,
    BlogComponent,
    LoginComponent,
    SingupComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
