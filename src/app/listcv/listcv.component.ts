import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Models/Personne';

@Component({
  selector: 'app-listcv',
  templateUrl: './listcv.component.html',
  styleUrls: ['./listcv.component.scss']
})
export class ListcvComponent implements OnInit {

@Input() personnes :Personne[];
@Output() selectedPersonne = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(selectedPersonne:any){
    this.selectedPersonne.emit(selectedPersonne)
    console.log("selectedPersonne")
    console.log(selectedPersonne)
  }

}
