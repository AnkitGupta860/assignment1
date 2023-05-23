import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OddNumber : number[] = [];
  EvenNumber : number[] = [];

  onIntervalFired(FiredNumber : number){
    if(FiredNumber%2==0)
    {
      this.EvenNumber.push(FiredNumber);
    }
    else{
      this.OddNumber.push(FiredNumber);
    }
  }
}
