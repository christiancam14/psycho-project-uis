import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalContentWorkshopsComponent } from './components/modal-content-workshops/modal-content-workshops.component';


@NgModule({
  declarations: [
    ModalContentWorkshopsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    ModalContentWorkshopsComponent
  ],
  bootstrap: [
    ModalContentWorkshopsComponent
  ]
})
export class SharedModule { }
