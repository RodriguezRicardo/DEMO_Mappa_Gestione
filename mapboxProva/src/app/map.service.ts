import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../environments/environment";

import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  dataSubject : Subject<any> = new Subject<any>();
  map: mapboxgl.Map;
  geocoder: MapboxGeocoder;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 45.4628328;
  lng = 9.1076927;
  zoom = 12

  getDataSubjectObs() : Observable<any>
  {
    return this.dataSubject.asObservable();
  }

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })

    //per cercare le varie città
    this.geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    })


    document.getElementById('geocoder').appendChild(this.geocoder.onAdd(this.map));

    //restituisce il json della ricerca
    this.geocoder.on('result', (ev) => {
      var styleSpec = ev.result;
      console.log(styleSpec);
      this.dataSubject.next(styleSpec);
    });

    //per aumentare, diminuire, ruotare la mappa
    this.map.addControl(new mapboxgl.NavigationControl());

    //per geolocalizzare la posizione
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
  }

}
