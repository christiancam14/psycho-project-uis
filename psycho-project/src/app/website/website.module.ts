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
<<<<<<< HEAD
import { CarrouselComponent } from './components/shared/carrousel/carrousel.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { CardComponent } from './components/shared/card/card.component';
import { ImgCardComponent } from './components/shared/img-card/img-card.component';
import { OpinionCardComponent } from './components/shared/opinion-card/opinion-card.component';
=======
import { WorkshopsCardsComponent } from './components/workshops-cards/workshops-cards.component';
import { SharedModule } from '../shared/shared.module';
>>>>>>> 3b9651da9fe26efe5faadf7eeb36c8cfd923fac5


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
<<<<<<< HEAD
    CarrouselComponent,
    BannerComponent,
    CardComponent,
    ImgCardComponent,
    OpinionCardComponent
=======
    WorkshopsCardsComponent
>>>>>>> 3b9651da9fe26efe5faadf7eeb36c8cfd923fac5
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
