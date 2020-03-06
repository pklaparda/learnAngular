import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor() { }

  getSports() {
    return [
      'Football', 'Baseball', 'Basketball', 'Volleyball', 'Hockey'
    ];
  }
}
