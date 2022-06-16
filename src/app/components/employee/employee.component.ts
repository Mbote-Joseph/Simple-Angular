import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;

  getInfo1() {
    this.show1 = !this.show1;
    this.infoReceived1 = this.recordsService.getInfo1();
  }
  getInfo2() {
    this.show2 = !this.show2;
    this.infoReceived2 = this.recordsService.getInfo2();
  }
  getInfo3() {
    this.show3 = !this.show3;
    this.infoReceived3 = this.recordsService.getInfo3();
  }

  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {}
}
