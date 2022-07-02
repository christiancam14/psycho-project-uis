import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content-workshops',
  templateUrl: './modal-content-workshops.component.html',
  styleUrls: ['./modal-content-workshops.component.css']
})
export class ModalContentWorkshopsComponent {

  @Input() workshopTitle:string;
  @Input() workshopImg:string;
  @Input() shortDescription:string;

  constructor(public activeModal: NgbActiveModal) {}

}
