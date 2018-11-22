import { Component, OnInit } from '@angular/core';
import {ListingService} from '../app/services/listing-schedule-service/listing.component.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  public list: any = null;
  public total:any = 0;
  constructor(public listingService:ListingService){
    this.list = null;
  }

  ngOnInit() {
    this.listingService.listFlights().subscribe(
      data => {
        this.list = data
        console.log(data)

        this.calculate()
      },
      error => {
        console.log('Login not Succesfull');

      }
    );
  }
   RemoveNode(id) {
     console.log(id)
    for( var i = 0; i < this.list.length; i++){ 
      if ( this.list[i]['_id'] === id) {
        this.list.splice(i, 1);
        break; 
      }
   }
   this.calculate()
}
  calculate() {
    let total = 0 ;
    for (let i = 0 ; i < this.list.length; i++) {
      total = Number(this.list[i]['Price']) + total;
    }
    this.total = total;
    console.log(this.total);
  }
  
  title = 'app works!';
}
