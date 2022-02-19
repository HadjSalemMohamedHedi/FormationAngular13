import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/Personne';
import { PremierService } from '../Services/premier.service';
import { CvService } from '../Services/cv.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;
  constructor(private CvService:CvService) { }

  ngOnInit(): void {
    this.CvService.getCv().subscribe(
      (personne)=>{
        this.personnes=personne;
      },
      (eur)=>{
        alert("probléme Connexion 500");
        this.personnes=this.CvService.getFakePersonne()
      }
    )



  }

  selectPersonne(personne:any){
this.selectedPersonne=personne;
console.log(personne);
  }

}
