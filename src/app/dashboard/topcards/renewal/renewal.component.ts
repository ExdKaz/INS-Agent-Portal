import { Component, OnInit } from "@angular/core";
import { CartService } from "src/cart.service";

@Component({
    selector: 'app-renewal',
    templateUrl: './renewal.component.html',
    styleUrls: ['./renewal.component.css']
})
export class RenewalComponent implements OnInit {
    public renewalList: any = [];

    constructor(private Renewalservice: CartService) {

    }
    ngOnInit(): void {
        this.Renewalservice.getRenewal().subscribe((response: any) => {
            this.renewalList = response;
        })

    }

}