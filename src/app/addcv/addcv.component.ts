import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcv',
  templateUrl: './addcv.component.html',
  styleUrls: ['./addcv.component.scss']
})
export class AddcvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  addForm(formulaire:NgForm){
    console.log(formulaire)
  }
}
