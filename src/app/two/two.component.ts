import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CountService } from '../count.service';
import { OneComponent } from '../one/one.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  nota: any;
  constructor(private service: CountService) {
    this.nota = this.service.nota;
  }

  ngOnInit() {}
}
