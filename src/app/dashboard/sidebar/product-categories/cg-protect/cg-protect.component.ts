import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { CartService } from "src/cart.service";

@Component({
    selector: 'app-cg-protect',
    templateUrl: './cg-protect.component.html',
    styleUrls: ['./cg-protect.component.css']
})

export class CgprotectComponent implements OnInit {
    @ViewChild('sidenav')

    sidenav!: MatSidenav;
    reason = '';


    close(reason: string) {

        this.reason = reason;

        this.sidenav.close();

    }

    cgprotectList: any = [];


    constructor(private cgprotectService: CartService) { }

    formatLabel(value: number): string {

        if (value >= 1) {

            return Math.round(value / 1) + 'yr';

        }

        return `${value}`;

    }

    ngOnInit(): void {
        this.cgprotectService.cgprotectList().subscribe((response: any) => {

            this.cgprotectList = response;

        })
    }

}