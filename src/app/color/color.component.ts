import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  myColor:"";

  constructor(private router: Router,private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      (params)=>{
        this.myColor=params['default']
      }
    )
  }

  GoToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }
}
