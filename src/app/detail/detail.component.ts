import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from '../Models/Personne';
import { CvService } from '../Services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
personne: Personne;
  constructor(
    private CvService:CvService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*this.ActivatedRoute.params.subscribe((params)=>{
     this.personne = this.CvService.getPersonneById(params['id'])
    })*/

    this.ActivatedRoute.params.subscribe(
      (params)=>{
        this.CvService.getPersonneById(params['id']).subscribe(
          (response)=>{
            this.personne=response;
          }
        )
      }
    )
  }

}
