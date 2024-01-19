import { CartService } from "src/cart.service";
import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-leads',
    templateUrl: './new-leads.component.html',
    styleUrls: ['./new-leads.component.css']
})
export class NewLeadsComponent implements OnInit {
    public newleadsList: any = [];




    constructor(private NewLeadsservice: CartService, private el: ElementRef) {

    }


    ngOnInit(): void {
        this.NewLeadsservice.getNewLeads().subscribe((response: any) => {
            this.newleadsList = response;
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