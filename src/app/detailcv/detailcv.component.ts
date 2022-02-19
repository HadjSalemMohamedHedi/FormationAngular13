import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Models/Personne';
import { EmbaucheService } from '../Services/embauche.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.scss'],
})
export class DetailcvComponent implements OnInit {
  @Input() personne: Personne;
  teams = ['CA', 'Barca', 'Lyon'];
  constructor(private EmbaucheService: EmbaucheService,private router: Router) {}

  ngOnInit(): void {}

  embaucher(newPersonne: Personne) {
    this.EmbaucheService.embaucher(newPersonne);
  }

  moreInfo() {
    const link = ['alldetails', this.personne.id];
    this.router.navigate(link)
  }
}
