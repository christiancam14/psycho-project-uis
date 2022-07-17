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
import { OpinionCardComponent } from './components/shared/opinion-card/opinion-card.component';
import { SharedModule } from '../shared/shared.module';
import { WorkshopsCardsComponent } from './components/workshops-cards/workshops-cards.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormLoginSingupComponent } from './components/shared/form-login-singup/form-login-singup.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TooltipModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MatSliderModule } from '@angular/material/slider';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SelectButtonModule } from 'primeng/selectbutton';
import { WorkshopComponent } from './components/shared/workshop/workshop.component';
import { CarouselModule } from 'primeng/carousel';
import { SocialComponent } from './components/social/social.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { SpeedDialModule } from 'primeng/speeddial';
import {MessagesModule} from 'primeng/messages';
import { AccordionQuestionsComponent } from './components/shared/accordion-questions/accordion-questions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CookieService } from 'ngx-cookie-service';
import { CitasEstudianteComponent } from './components/citas-estudiante/citas-estudiante.component';
import { DescriptionComponent } from './components/description/description.component';
import { VideosComponent } from './components/videos/videos.component';
import { SafePipe } from '../safe.pipe';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule  }from '@videogular/ngx-videogular/buffering';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PreHeaderPageComponent } from './pages/pre-header-page/pre-header-page.component';

// import { ConvertirStringPipe } from '../convertir-string.pipe';

@NgModule({
  declarations: [
    SafePipe,
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
    ImgCardComponent,
    OpinionCardComponent,
    WorkshopsCardsComponent,
    FormLoginSingupComponent,
    WorkshopComponent,
    SocialComponent,
    AccordionQuestionsComponent,
    ProfileComponent,
    CitasEstudianteComponent,
    DescriptionComponent,
    VideosComponent,
    EditProfileComponent,
    PreHeaderPageComponent,
    
    // ConvertirStringPipe
  ],
  imports: [
    AccordionModule,
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    ChipsModule,
    DropdownModule,
    DividerModule,
    InputTextModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    KeyFilterModule,
    ListboxModule,
    MessageModule,
    MessagesModule,
    MatSliderModule,
    MultiSelectModule,
    PasswordModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    RippleModule,
    ToastModule,
    SpeedDialModule,
    SelectButtonModule,
    ScrollingModule,
    RadioButtonModule,
    ReactiveFormsModule,
    RippleModule,
    TooltipModule,
    ReactiveFormsModule ,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [CookieService ],
})
export class WebsiteModule { }
