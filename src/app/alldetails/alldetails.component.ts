import { Component, OnInit } from '@angular/core';
import { CvService } from '../Services/cv.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Personne } from '../Models/Personne';

@Component({
  selector: 'app-alldetails',
  templateUrl: './alldetails.component.html',
  styleUrls: ['./alldetails.component.scss']
})
export class AlldetailsComponent implements OnInit {

  Personne:Personne;
  constructor(private CvService:CvService,private ActivatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      (params)=>{
        this.CvService.getPersonneById(params['id']).subscribe(
          (response)=>{
            this.Personne=response;
          },
          (eur)=>{
            console.log(eur)
          },

        )
      }
    )
  }

  delete(){
this.CvService.deletePersonne(this.Personne.id).subscribe(
  (res)=>{
    this.router.navigate(['cv'])
    console.log(res)
  },
  (eur)=>{
    alert('Eurreur 500')
  }
)
  }

  update(id:number){
    this.router.navigate(['update/'+id])

  }


}
