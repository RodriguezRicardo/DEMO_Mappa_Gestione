import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }
  searchPlace(place: string) {
    const url = `https://3000-brown-horse-2kbqj5ei.ws-eu03.gitpod.io/place/${place}`;
    return this.http.get(url);
  }
}
