import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DividerModule } from 'primeng/divider'
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';

import { JwtInterceptorInterceptor } from './interceptors/jwt-interceptor.interceptor'
import { CookieService } from 'ngx-cookie-service';
import { ConvertirStringPipe } from './convertir-string.pipe';
import { SafePipe } from './safe.pipe';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule  }from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ConvertirStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    DividerModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    KeyFilterModule,
    ListboxModule,
    MessageModule,
    MatSliderModule,
    MultiSelectModule,
    PasswordModule,
    SelectButtonModule,
    ScrollingModule,
    RadioButtonModule,
    ReactiveFormsModule,
    RippleModule,
    TooltipModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule

  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : JwtInterceptorInterceptor, multi : true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
