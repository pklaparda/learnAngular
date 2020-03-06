import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormData } from 'src/app/models/formData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sports: string[] = [];
  requireSubmition: boolean = false;
  guyToGreet = '';

  constructor(private sportsSrv: SportsService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    const params = this.router.snapshot.params;
    if (params.email === undefined) {
      this.sports = this.sportsSrv.getSports();
      this.requireSubmition = true;
    } else {
      this.guyToGreet = params.email;
    }
  }

  onDataSubmited(data: FormData) {
    this.requireSubmition = false;
    this.guyToGreet = data.email;
  }

}
