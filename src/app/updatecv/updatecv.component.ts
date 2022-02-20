import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/Personne';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../Services/cv.service';

@Component({
  selector: 'app-updatecv',
  templateUrl: './updatecv.component.html',
  styleUrls: ['./updatecv.component.scss'],
})
export class UpdatecvComponent implements OnInit {
  personne: Personne;
  constructor(private ActivatedRoute:ActivatedRoute,private CvService:CvService) {}

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(
      (params)=>{
        this.CvService.getPersonneById(params['id']).subscribe(
          (response)=>{
            this.personne=response;
          }
        )
      }
    )  }

update(){
  console.log("this.personne")
  console.log(this.personne)
this.CvService.updatecv(this.personne).subscribe(
  (res)=>{
    console.log(res)
  },
  (eur)=>{
    console.log(eur)
  }
)
}
}
