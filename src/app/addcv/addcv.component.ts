import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../Services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcv',
  templateUrl: './addcv.component.html',
  styleUrls: ['./addcv.component.scss'],
})
export class AddcvComponent implements OnInit {
  constructor(private CvService: CvService,private router:Router) {}

  ngOnInit(): void {}



  addCv(formulaire: NgForm) {
    this.CvService.addCv(formulaire.value);
    this.router.navigate(['cv'])
  }
}
