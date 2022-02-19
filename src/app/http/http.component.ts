import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response)=>{
        console.log('response')
        console.log(response)
      },
      (eur)=>{
        console.log('eur')
        console.log(eur)
      },
      ()=>{
        console.log("Complete")
      }
    )
   }

  ngOnInit(): void {
  }

}
