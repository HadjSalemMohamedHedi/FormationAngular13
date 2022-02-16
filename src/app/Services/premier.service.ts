import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {
data=[
  'data 1',
  'data 2 ',
  'data 3',
  'data 4',
]
  constructor() { }

logger(data:any){
  console.log("PremierService")
  console.log(data)
  console.log("this.data")
  console.log(this.data)
}
addData(data:any){
  this.data.push(data)
}

}
