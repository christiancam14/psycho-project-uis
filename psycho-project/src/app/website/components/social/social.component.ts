import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    
    this.items = [
      {
          icon: 'pi pi-pencil',
          command: () => { }
      },
      {
          icon: 'pi pi-refresh',
          command: () => { }
      },
      {
          icon: 'pi pi-trash',
          command: () => { }
      },
      {
          icon: 'pi pi-upload',
      },
      {
          icon: 'pi pi-external-link',
          url: 'http://angular.io'

      }
  ];
  }

}
