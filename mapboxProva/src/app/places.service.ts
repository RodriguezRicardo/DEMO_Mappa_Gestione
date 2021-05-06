import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }
  searchPlace(y: any, x: any, y1 :any, x1: any) {
    const url = `https://3000-maroon-limpet-mmuu0k3f.ws-eu05.gitpod.io/place/${y}/${x}/${y1}/${x1}`;
    return this.http.get(url);
  }
}
