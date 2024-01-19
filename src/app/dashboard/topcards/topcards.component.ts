import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-topcards',
  templateUrl: './topcards.component.html',
  styleUrls: ['./topcards.component.css']
})
export class TopcardsComponent implements OnInit {
  newleadsList: any = [];
  row1: any;
  row2: any;
  row3: any;
  constructor(public service: CartService) { }
  ngOnInit(): void {
    this.service.getNewLeads().subscribe((response: any) => {
      this.newleadsList = response; this.row1 = this.newleadsList.length;
    })
    this.service.getRenewal().subscribe((response: any) => {
      this.newleadsList = response; this.row2 = this.newleadsList.length;
    })
    this.service.getExpired().subscribe((response: any) => {
      this.newleadsList = response; this.row3 = this.newleadsList.length;
    })
  }

}
