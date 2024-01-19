import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CartService } from "src/cart.service";

@Component({
    selector: 'app-add-new-leads',
    templateUrl: './add-new-leads.component.html',
    styleUrls: ['./add-new-leads.component.css']
})

export class AddNewLeadsComponent implements OnInit {
    isLinear = false;


    constructor(private formBuilder: FormBuilder, private cartService: CartService) { }

    ngOnInit(): void {

    }

    firstFormGroup = this.formBuilder.group({

        firstCtrl: ['', Validators.required]

    });

    secondFormGroup = this.formBuilder.group({

        secondCtrl: ['', Validators.required],

    });

    thirdFormGroup = this.formBuilder.group({

        thirdCtrl: ['', Validators.required],

    });

    registrationForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', Validators.required],
        phone: [, [Validators.required, Validators.minLength(10)]],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        dob: [, Validators.required],
        pincode: [, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        gender: ['', Validators.required],
        smoke: [''],
        alcohol: [''],
        address: ['', Validators.required],
        dependents: ['']
    })



}
