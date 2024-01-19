import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { DashbComponent } from './dashb/dashb.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { NewApplicantsComponent } from './dashboard/new-applicants/new-applicants.component';
import { AllSalesComponent } from './dashboard/all-sales/all-sales.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { EventsComponent } from './dashboard/events/events.component';
import { TSPComponent } from './dashboard/tsp/tsp.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { SchedulesComponent } from './dashboard/schedules/schedules.component';
import { TopcardsComponent } from './dashboard/topcards/topcards.component';
import { ExpiredComponent } from './dashboard/topcards/expired/expired.component';
import { RenewalComponent } from './dashboard/topcards/renewal/renewal.component';
import { TotalClaimsComponent } from './dashboard/topcards/total-claims/total-claims.component';
import { ClickableTableRowDirective, NewLeadsComponent } from './dashboard/topcards/new-leads/new-leads.component';
import { TotalApplicationsComponent } from './dashboard/new-applicants/total-applications/total-applications.component';
import { AddNewLeadsComponent } from './dashboard/topcards/new-leads/add-new-leads/add-new-leads.component';
import { ProductCategoriesComponent } from './dashboard/sidebar/product-categories/product-categories.component';
import { PolicyComponent } from './dashboard/topcards/renewal/policy/policy.component';
import { ApplicationDetailsComponent } from './dashboard/new-applicants/total-applications/application-details/application-details.component';
import { LeadsComponent } from './dashboard/topcards/new-leads/leads/leads.component';
import { CgprotectComponent } from './dashboard/sidebar/product-categories/cg-protect/cg-protect.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuotationComponent } from './quotation/quotation.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    NewApplicantsComponent,
    AllSalesComponent,
    NavbarComponent,
    EventsComponent,
    TSPComponent,
    SidebarComponent,
    SchedulesComponent,
    TopcardsComponent,
    ExpiredComponent,
    RenewalComponent,
    TotalClaimsComponent,
    NewLeadsComponent,
    TotalApplicationsComponent,
    DashbComponent,
    AddNewLeadsComponent,
    ProductCategoriesComponent,
    PolicyComponent,
    ApplicationDetailsComponent,
    ClickableTableRowDirective,
    LeadsComponent,
    CgprotectComponent,
    QuotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatSelectModule,
    MatTableModule,
    MatSidenavModule,
    MatSliderModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
