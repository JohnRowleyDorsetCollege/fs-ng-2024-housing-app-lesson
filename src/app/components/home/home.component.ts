import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { HousingLocation } from '../../models/housing-location';
import { HousingLocationService } from '../../services/housing-location.service';
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingLocationService = inject(HousingLocationService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }

}
