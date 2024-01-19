import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-leads',
    templateUrl: './leads.component.html',
    styleUrls: ['./leads.component.css']
})

export class LeadsComponent {
    data: any;

    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {

            this.data = JSON.parse(params['data']);

            console.log(this.data); // or display the data in the template

        });
    }
}