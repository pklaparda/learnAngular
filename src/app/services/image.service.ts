import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  endpoint = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(private http: HttpClient) { }

  getRandomPic() {
    return this.http.get(`${this.endpoint}${Math.round(Math.random() * 5000)}`).pipe(
      tap(res => console.log(res)),
      map(res => (res as any).url as string)
    );
  }
}
