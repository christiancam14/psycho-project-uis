import { Component, Input, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalContentWorkshopsComponent } from 'src/app/shared/components/modal-content-workshops/modal-content-workshops.component';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  workshopTitle: string = 'Psicóloga Julieta Venegas';
  img = 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80';
  shortDescription: string = 'Hola, soy Julieta Venegas, psicologa de la Universidad Industrial de Santander. Cuento con más de 10 años de experiencia en atención a estudiantes. Me gusta la música, el arte, las películas y los gatos. Si necesitas una cita conmigo no dudes en buscarme.';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(ModalContentWorkshopsComponent, {size: 'md'});
    modalRef.componentInstance.workshopTitle = this.workshopTitle;
    modalRef.componentInstance.workshopImg = this.img;
    modalRef.componentInstance.shortDescription = this.shortDescription;
  }

}
