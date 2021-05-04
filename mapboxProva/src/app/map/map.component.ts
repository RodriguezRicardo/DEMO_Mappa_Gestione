import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { Observable } from 'rxjs';
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  results: any;
  text: any;
  city: any;

  obs: Observable<Object>;
  resPlace: any;

  constructor(private map: MapService, private place: PlacesService) { }

  ngOnInit() {
    this.map.buildMap();

    //riceve i dati dalla mappa
    this.map.getDataSubjectObs().subscribe(this.getMapSearchData);
  }

  getMapSearchData = (message) => {
    this.results = message;
    this.city = this.results.text;
    this.obs = this.place.searchPlace(this.city); //richiamare dati dal server
    this.obs.subscribe(this.getDataServer);
  }

  getDataServer = (data) => {
    this.resPlace = data[0];
    console.log(this.resPlace);
  }
}
