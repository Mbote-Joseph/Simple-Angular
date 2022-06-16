import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = [
    'Joseph Mbote',
    'SCT211-0011/2018',
    'joseph.mbogo@students.jkuat.ac.ke',
  ];
  info2: string[] = [
    'Mbote Mbogo',
    'SCT211-0012/2018',
    'joseph.mbogo@students.jkuat.ac.ke',
  ];
  info3: string[] = [
    'Joseph Mbogo',
    'SCT211-0013/2018',
    'joseph.mbogo@students.jkuat.ac.ke',
  ];

  getInfo1(): string[] {
    return this.info1;
  }
  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }

  constructor() {}
}
