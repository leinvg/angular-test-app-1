import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housinglocation: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filterHousinglocation: HousingLocation[] = [];

  constructor() {
    this.housinglocation = this.housingService.getAllHousingLocations();
    this.filterHousinglocation = this.housinglocation;
  }

  filterResults(searchTerm: string) {
    if (!searchTerm) {
      this.filterHousinglocation = this.housinglocation;
      return;
    }
    this.filterHousinglocation = this.housinglocation.filter((item) =>
      item?.city.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
}
