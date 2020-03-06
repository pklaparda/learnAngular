import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  url: string = '';
  loading = false;

  constructor(private imgSrv: ImageService) { }

  ngOnInit() {
  }

  fetchImg() {
    this.loading = true;
    this.imgSrv.getRandomPic().subscribe(imgUrl => {
      this.url = imgUrl;
      this.loading = false;
    });
  }

}
