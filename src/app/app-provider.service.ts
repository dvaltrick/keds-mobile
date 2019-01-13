import { Usuario } from './models/usuario';
import { Prova } from './models/prova';
import { Observable } from 'rxjs/Observable';
import { Instituicao } from './models/instituicao';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppProviderService {
  BASE_URL = "http://localhost:5000/api/";

  constructor(private httpClient:HttpClient) { }

  public getInstituicoes(token:string):Observable<Instituicao[]>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.httpClient.get<Instituicao[]>(this.BASE_URL+"instituicao",options);
  }

  public getProva(id:string, token:string):Observable<Prova[]>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }

    return this.httpClient.get<Prova[]>(this.BASE_URL+"prova/byinstituicao/"+id,options);
  }

  public login(data:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.BASE_URL+"login",data,httpOptions);
  }
}
