import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  results: any;

  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.buildMap();

    this.map.getDataSubjectObs().subscribe(message => this.results = message);
  }

}
