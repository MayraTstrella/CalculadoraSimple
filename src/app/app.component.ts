import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc-angular';


  opA = 0;
  opB = 0;
  res = 0;
 
  sumar():void {
    this.res = this.opA + this.opB;
  }

}
