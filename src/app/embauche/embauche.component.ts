import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/Personne';
import { EmbaucheService } from '../Services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {
Personnes: Personne[];
  constructor(private EmbaucheService:EmbaucheService) { }

  ngOnInit(): void {
    this.Personnes=this.EmbaucheService.getEmbaucher()
  }

}
