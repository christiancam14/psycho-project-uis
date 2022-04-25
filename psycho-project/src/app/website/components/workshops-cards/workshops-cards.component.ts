import { Component, Input, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalContentWorkshopsComponent } from 'src/app/shared/components/modal-content-workshops/modal-content-workshops.component';

@Component({
  selector: 'app-workshops-cards',
  templateUrl: './workshops-cards.component.html',
  styleUrls: ['./workshops-cards.component.css']
})
export class WorkshopsCardsComponent{

  workshopTitle: string = 'Workshop Title';
  img = 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80';
  shortDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor(private modalService: NgbModal) {}

    open() {
      const modalRef = this.modalService.open(ModalContentWorkshopsComponent, {size: 'lg'});
      modalRef.componentInstance.workshopTitle = this.workshopTitle;
      modalRef.componentInstance.workshopImg = this.img;
      modalRef.componentInstance.shortDescription = this.shortDescription;
    }
}