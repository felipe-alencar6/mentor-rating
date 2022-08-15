import { Injectable } from '@angular/core';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  constructor() {}

  nota: any;
}
