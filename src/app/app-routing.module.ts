import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashbComponent } from './dashb/dashb.component';
import { ApplicationDetailsComponent } from './dashboard/new-applicants/total-applications/application-details/application-details.component';
import { TotalApplicationsComponent } from './dashboard/new-applicants/total-applications/total-applications.component';
import { CgprotectComponent } from './dashboard/sidebar/product-categories/cg-protect/cg-protect.component';
import { ProductCategoriesComponent } from './dashboard/sidebar/product-categories/product-categories.component';
import { ExpiredComponent } from './dashboard/topcards/expired/expired.component';
import { AddNewLeadsComponent } from './dashboard/topcards/new-leads/add-new-leads/add-new-leads.component';
import { LeadsComponent } from './dashboard/topcards/new-leads/leads/leads.component';
import { NewLeadsComponent } from './dashboard/topcards/new-leads/new-leads.component';
import { PolicyComponent } from './dashboard/topcards/renewal/policy/policy.component';
import { RenewalComponent } from './dashboard/topcards/renewal/renewal.component';
import { TotalClaimsComponent } from './dashboard/topcards/total-claims/total-claims.component';
import { QuotationComponent } from './quotation/quotation.component';







const routes: Routes = [
    { path: '', component: DashbComponent },
    { path: 'dashboard', component: DashbComponent },
    { path: 'expired', component: ExpiredComponent },
    { path: 'renewal', component: RenewalComponent },
    { path: 'newleads', component: NewLeadsComponent },
    { path: 'totalclaims', component: TotalClaimsComponent },
    { path: 'viewall', component: TotalApplicationsComponent },
    { path: 'addnewlead', component: AddNewLeadsComponent },
    { path: 'productcategories', component: ProductCategoriesComponent },
    { path: 'policydetails', component: PolicyComponent },
    { path: 'applicantdetail', component: ApplicationDetailsComponent },
    { path: 'viewall', component: TotalApplicationsComponent },
    { path: 'leads', component: LeadsComponent },
    { path: 'cgprotect', component: CgprotectComponent },
    { path: 'quotation', component: QuotationComponent }

];




@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]

})

export class AppRoutingModule { }