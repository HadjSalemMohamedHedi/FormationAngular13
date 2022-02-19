import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  personnes: Personne[];
  PersonnesFake: Personne[];
  link = 'http://localhost:3000/api/n';

  constructor(private http: HttpClient) {
    this.personnes = [];
    this.PersonnesFake = [
      new Personne(
        '7',
        'tes 2',
        'first 3',
        '55',
        'fake.jpg',
        '11447788',
        'testeurfaje'
      ),
    ];
  }

  getCv(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getFakePersonne() {
    return this.PersonnesFake;
  }

  getPersonneById(id: any): Observable<Personne> {
   return this.http.get<Personne>(this.link+'/'+id)
  }

  addCv(MyPersonne: Personne):Observable<any> {
    const token = localStorage.getItem("token");
    if(token){
          const params = new HttpParams().set("access_token",token);
          return this.http.post(this.link,MyPersonne,{params});
    }
    return this.http.post(this.link,MyPersonne);

  }

  deletePersonne(id: any) {
    return this.http.delete(this.link+'/'+id)
   }

}
