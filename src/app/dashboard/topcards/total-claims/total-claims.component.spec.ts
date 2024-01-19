import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalClaimsComponent } from './total-claims.component';

describe('TotalClaimsComponent', () => {
    let component: TotalClaimsComponent;
    let fixture: ComponentFixture<TotalClaimsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TotalClaimsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TotalClaimsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
