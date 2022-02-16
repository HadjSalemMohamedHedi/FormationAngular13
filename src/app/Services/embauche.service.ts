import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
private personnes: Personne[];
  constructor() {
    this.personnes=[];
  }

  getEmbaucher(): Personne[]{
return this.personnes;
  }

  embaucher(newPersonne:Personne){
    const Index=this.personnes.indexOf(newPersonne);
    if(Index<0){
          this.personnes.push(newPersonne)
    }else{
      alert(newPersonne.name+' est déja embaché')
    }
  }

  debaucher(newPersonne:Personne){
    const Index=this.personnes.indexOf(newPersonne);
    if(Index>=0){
      this.personnes.splice(Index,1)
    }else{
      alert(newPersonne.name+' n\'est embaché')
    }
  }

}
