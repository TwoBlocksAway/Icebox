import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    //should create ul#nav

    //should create li#signUp

    //li#signUp contents should be `Sign-up`

    //should create li#login

    //li#login contents should be `Login`

    //CONDITIONS (changes depending on user login status)
    //  WHEN USER NOT LOGGED IN
    //      ul#nav should show `Sign-up` and `Login`
    //
    //  WHEN USER IS LOGGED IN
    //      ul#nav should show `Profile` and `Logout`

});
