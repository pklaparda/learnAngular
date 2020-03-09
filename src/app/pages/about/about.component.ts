import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  url = null;
  loading = false;

  constructor(private imgSrv: ImageService, private dZanitazer: DomSanitizer) { }

  ngOnInit() {
  }

  fetchImg() {
    this.loading = true;
    this.imgSrv.getRandomPic().subscribe(imgUrl => {
      this.url = this.dZanitazer.bypassSecurityTrustUrl(imgUrl);
      this.loading = false;
    });
  }

}
