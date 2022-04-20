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
import { CarrouselComponent } from './components/shared/carrousel/carrousel.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { CardComponent } from './components/shared/card/card.component';
import { ImgCardComponent } from './components/shared/img-card/img-card.component';


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
    CarrouselComponent,
    BannerComponent,
    CardComponent,
    ImgCardComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
