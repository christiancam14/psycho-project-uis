import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HeaderComponent } from './components/header/header.component';

import { WebsiteRoutingModule } from './website-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AttentionTopComponent } from './components/attention-top/attention-top.component';
import { WorkshopsCardsComponent } from './components/workshops-cards/workshops-cards.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    FaqComponent,
    BlogComponent,
    LoginComponent,
    SingupComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AttentionTopComponent,
    WorkshopsCardsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
