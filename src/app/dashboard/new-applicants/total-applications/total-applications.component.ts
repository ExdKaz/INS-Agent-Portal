import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { CartService } from "src/cart.service";

@Component({
    selector: 'app-total-applications',
    templateUrl: './total-applications.component.html',
    styleUrls: ['./total-applications.component.css']
})
export class TotalApplicationsComponent implements OnInit {
    public totalappliList: any = [];

    constructor(private TotalAppliservice: CartService, private el: ElementRef) {

    }
    ngOnInit(): void {
        this.TotalAppliservice.getTotalAppli().subscribe((response: any) => {
            this.totalappliList = response;
        })


    }

}
@Directive({

    selector: '[appClickableTableRow]'

})

export class ClickableTableRowDirective {

    @Input() data: any;

    @Input() href!: string;

    constructor(private el: ElementRef) { }




    @HostListener('click') onClick() {

        const href = this.el.nativeElement.getAttribute('data-href');

        if (href) {

            const queryParams = this.data ? `?data=${JSON.stringify(this.data)}` : '';

            window.location.href = `${href}${queryParams}`;

        }

    }

}