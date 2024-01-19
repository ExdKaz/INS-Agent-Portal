import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-application-details',
    templateUrl: './application-details.component.html',
    styleUrls: ['./application-details.component.css']
})

export class ApplicationDetailsComponent implements OnInit {
    data: any;

    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {

            this.data = JSON.parse(params['data']);

            console.log(this.data); // or display the data in the template

        });
    }

}