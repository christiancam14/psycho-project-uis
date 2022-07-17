import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PsychologistManagerComponent } from './components/psychologist-manager/psychologist-manager.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { ConfirmPopupModule } from 'primeng/confirmpopup';


@NgModule({
  declarations: [
    PsychologistManagerComponent,
    AdminPanelComponent,
    AdminLoginComponent,
    AdminLayoutComponent,
    HeaderAdminComponent,
    FooterAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    HttpClientModule,
    ToastModule,
    ConfirmPopupModule,
    
  ],
  providers: [CookieService, ConfirmationService, MessageService ],
})
export class AdminModule { }
