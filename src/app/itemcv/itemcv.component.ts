import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Models/Personne';
import { PremierService } from '../Services/premier.service';

@Component({
  selector: 'app-itemcv',
  templateUrl: './itemcv.component.html',
  styleUrls: ['./itemcv.component.scss'],
  providers:[PremierService]
})
export class ItemcvComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor(private premierSrvice:PremierService ) {}

  ngOnInit(): void {}

  selectPersonne() {
    this.selectedPersonne.emit(this.personne);
  }

  GoService(mydata:any){
    this.premierSrvice.logger(mydata)
  }
}
