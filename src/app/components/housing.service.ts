import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}
  readonly basePhotoUrl =
    'https://i.pinimg.com/474x/24/77/9e/24779eb8b0ffffffa0766694c777d4ae.jpg';
  housinglocation: HousingLocation[] = [
    {
      id: 1,
      name: 'Test Home 1',
      city: 'Test City 1',
      state: 'ST',
      photo: `${this.basePhotoUrl}`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 2,
      name: 'Test Home 2',
      city: 'Test City 2',
      state: 'ST',
      photo: `${this.basePhotoUrl}`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 3,
      name: 'Test Home 3',
      city: 'Test City 3',
      state: 'ST',
      photo: `${this.basePhotoUrl}`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housinglocation;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housinglocation.find((housing) => housing.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(
      `First Name: ${firstName} - Last Name: ${lastName} - Email: ${email}`,
    );
  }
}
