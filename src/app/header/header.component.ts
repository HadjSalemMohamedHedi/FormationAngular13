import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged:any;
  constructor(private AuthentificationService:AuthentificationService) {
    this.isLogged=AuthentificationService.isLogged();
  }

  ngOnInit(): void {
  }

  logout(){
    this.AuthentificationService.logout();
  }

}
