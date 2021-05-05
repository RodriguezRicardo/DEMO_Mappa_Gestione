import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }
  searchPlace(y: any, x: any) {
    const url = `https://3000-turquoise-chickadee-cjq0tjiy.ws-eu03.gitpod.io/place/${y}/${x}`;
    return this.http.get(url);
  }
}
