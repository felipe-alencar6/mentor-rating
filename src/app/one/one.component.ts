import { style } from '@angular/animations';
import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { CountService } from '../count.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  nota: any;
  divStyle1 = 'nota';
  divStyle2 = 'nota';
  divStyle3 = 'nota';
  divStyle4 = 'nota';
  divStyle5 = 'nota';

  onClick() {
    //this.nota = 1;
    this.service.nota = this.nota;
    //this.divStyle = 'teste1';
  }
  changeColor() {}

  constructor(private service: CountService) {}

  ngOnInit() {}
}
