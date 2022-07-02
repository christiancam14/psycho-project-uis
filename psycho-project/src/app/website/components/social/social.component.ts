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
          icon: 'pi pi-whatsapp',
          url: 'https://wa.link/ssb2y4'
      },
      {
          icon: 'pi pi-facebook',
          url: 'https://www.facebook.com/UISenLinea/'
      },
      {
          icon: 'pi pi-youtube',
          url: 'https://www.youtube.com/user/uisvideo'
      },
      {
          icon: 'pi pi-twitter',
          url: 'https://twitter.com/UIS'
      },
      {
          icon: 'pi pi-book',
          url: 'https://uis.edu.co/inicio/'

      }
  ];
  }

}
