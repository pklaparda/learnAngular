import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormData } from 'src/app/models/formData';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  @Input() selectStuff: string[];
  @Output() submited = new EventEmitter<FormData>();

  profileForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.profileForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      sport: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  submit() {
    this.submited.emit(this.profileForm.value);
    this.profileForm.reset();
    this.profileForm.get('sport').setValue('');
  }

}
