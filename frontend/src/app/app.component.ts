import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public list: any = null;
  constructor(){
    this.list = null;
  }
  
  title = 'app works!';
}
