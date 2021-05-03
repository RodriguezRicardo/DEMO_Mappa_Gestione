import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }
  searchPlace(place: string) {
    const url = `https://3000-amaranth-shrew-onydfbz7.ws-eu03.gitpod.io/place/${place}`;
    return this.http.get(url);
  }
}
