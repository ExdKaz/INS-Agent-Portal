import { Component, OnInit } from "@angular/core";
import { CartService } from "src/cart.service";

@Component({
    selector: 'app-expired',
    templateUrl: './expired.component.html',
    styleUrls: ['./expired.component.css']
})
export class ExpiredComponent implements OnInit {
    public expiredList: any = [];

    constructor(private Expiredservice: CartService) {

    }
    ngOnInit(): void {
        this.Expiredservice.getExpired().subscribe((response: any) => {
            this.expiredList = response;
        })

    }

}