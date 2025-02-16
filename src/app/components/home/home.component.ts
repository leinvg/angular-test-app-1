import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly basePhotoUrl =
    'https://i.pinimg.com/474x/24/77/9e/24779eb8b0ffffffa0766694c777d4ae.jpg';
  housinglocation: HousingLocation[] = [
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      state: 'ST',
      photo: `${this.basePhotoUrl}`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      state: 'ST',
      photo: `${this.basePhotoUrl}`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      state: 'ST',
      photo: `${this.basePhotoUrl}`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    }
  ];
}
