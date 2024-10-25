import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationService } from '../../services/housing-location.service';
import { HousingLocation } from '../../models/housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService = inject(HousingLocationService)
  housingLocation: HousingLocation | undefined;

  // constructor() {
  //   // Extract the id that is passed in the route
  //   const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  //   // we need to call the housing service to extract the id - we need to create that method...go to the service now

  //   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  // }
  
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }


}
