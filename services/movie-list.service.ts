import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private url = environment.API_URL;

  constructor(private http: HttpClient) { }

  getMoviesByName (name:string){
    
   return this.http.get(this.url + `s=${name}`)
  }

  getMoviesByTitle(title: string){
    return this.http.get(this.url + `t=${title}`)
  }
}

