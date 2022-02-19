import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:'';
  password:'';

  constructor(private AuthentificationService:AuthentificationService) { }

  ngOnInit(): void {
  }

  login(Credentials:any){
    console.log(Credentials)
    console.log(Credentials)

    this.AuthentificationService.login(Credentials).subscribe(
      (res)=>{
        console.log(res)
        console.log(res)

        //localStorage.setItem('token',res['id'])
      },
      (eur)=>{
        console.log("eur")
        console.log(eur)
      }
    )
  }



}
