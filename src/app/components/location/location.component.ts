import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LatLon } from 'src/app/interfaces/lat-lon';
import { Station } from 'src/app/interfaces/station';
import { Stop } from 'src/app/interfaces/stop';
import { BkkApiService } from 'src/app/services/bkk-api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  availableStations: Array<Station> = [];
  positionAvailable = false;
  positionFailed = false;
  isLoading = true;
  loadingFailed = false;

  constructor(private bkkApi: BkkApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const paramLatLon = this.route.snapshot.paramMap.get('latlon');
    if (paramLatLon) {
      this.positionAvailable = true;
      const latlons = paramLatLon.split(',');
      const lat = parseFloat(latlons[0]);
      const lon = parseFloat(latlons[1]);
      this.loadBoards({ lat, lon });
    } else {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            this.positionAvailable = true;
            this.loadBoards({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            this.positionFailed = true;
            console.error(error);
          }
        );
      } else {
        this.positionFailed = true;
        console.error({ code: -1, message: 'Unsupported Browser' });
      }
    }
  }
  private loadBoards(latlon: LatLon): void {
    this.bkkApi.getStationsForLocation(latlon.lat, latlon.lon).subscribe({
      next: (stationsForLocation) => {
        this.availableStations = stationsForLocation.stations;
        this.availableStations.forEach((station) => {
          const stopCodes: Array<string> = [];
          station.stops.forEach((stop: Stop) => stopCodes.push(stop.id));
          station.stopCodeList = stopCodes.join(',');
        });
      },
      error: (error) => {
        this.isLoading = false;
        this.loadingFailed = true;
        console.log(error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
