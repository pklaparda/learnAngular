import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // endpoint = 'https://jsonplaceholder.typicode.com/photos/';
  endpoint = 'http://localhost:3300/dummyRandomImage';
  random = Math.round(Math.random() * 5);

  constructor(private http: HttpClient) { }

  getRandomPic() {
    return this.http.get(`${this.endpoint}`)
      .pipe(
        tap(res => console.log(res)),
        map(res => (res as any).url as string)
      )
      ;
  }
}
