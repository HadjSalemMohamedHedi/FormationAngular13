import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  monObservable:Observable<any>
  mesImage=[
    'cv.jpg',
    'hedi.jpg',
    'zidan.jpg'
  ];
  currentImage:'';
  constructor() { }

  ngOnInit(): void {
    this.monObservable=new Observable(
      (observe)=>{
        let i =this.mesImage.length - 1;
        setInterval(
          ()=>{
            observe.next(this.mesImage[i]);
            if(i>0){
              i--
            }else{
              i = this.mesImage.length - 1 ;
            }
          },1500
        )
      }
    );
    this.monObservable.subscribe(
      (result)=>{
        this.currentImage=result;
      }
    )
  }

}
