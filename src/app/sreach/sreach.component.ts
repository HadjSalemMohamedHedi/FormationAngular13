import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../Models/Personne';
import { CvService } from '../Services/cv.service';

@Component({
  selector: 'app-sreach',
  templateUrl: './sreach.component.html',
  styleUrls: ['./sreach.component.scss'],
})
export class SreachComponent implements OnInit {
  searchResult: Personne[];
  chaine="";
  constructor(private CvService: CvService,private router:Router) {}

  ngOnInit(): void {}

  search() {
    const name = this.chaine.trim();

    if (name.length) {
      this.CvService.getByName(name).subscribe((personnes) => {
        this.searchResult = personnes;
      });
    } else {
      this.searchResult = [];
    }
  }

  selectPersonne(personne: Personne) {
    console.log(personne);
    this.chaine='';
    this.searchResult = [];
    this.router.navigate(["alldetails/"+personne.id])
  }
}
