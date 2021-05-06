import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }
  searchPlace(y: any, x: any, y1 :any, x1: any) {
    const url = `https://3000-turquoise-flyingfish-srj91d7n.ws-eu03.gitpod.io/place/${y}/${x}/${y1}/${x1}`;
    return this.http.get(url);
  }
}
