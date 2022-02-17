import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(
        '1',
        'hedi',
        'haj salem',
        '27',
        'hedi.jpg',
        '117371844',
        'ingénieur'
      ),
      new Personne(
        '2',
        'zidan',
        ' zineddin',
        '28',
        'zidan.jpg',
        '11771844',
        'Joueur'
      ),
      new Personne(
        '3',
        'mohamed',
        'haj ',
        '27',
        'hedi.jpg',
        '117371844',
        'testeur'
      ),
      new Personne('4', 'dedi', 'ded ', '27', '', '117371844', 'no job'),
    ];
  }

  getCv(): Personne[] {
    return this.personnes;
  }

  getPersonneById(id: any): any {
    var personne = this.personnes.find((personne) => {
      return personne.id == id;
    });
    return personne;
  }
}
