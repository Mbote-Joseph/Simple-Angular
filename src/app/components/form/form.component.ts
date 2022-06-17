import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  email = new FormControl('');
  submit(login: any) {
    console.log('Form submitted', this.email);
  }

  constructor() {}

  ngOnInit(): void {}
}
