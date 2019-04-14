import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('a#signup should render contents of `Sign Up`', () => {
        expect(de.nativeElement.querySelector('#signUp').textContent).toContain('Sign Up');
    });

    it('a#login should render contents of `Login`', () => {
        expect(de.nativeElement.querySelector('#login').textContent).toContain('Login');
    });

    it('a#profile should render contents of `Profile`', () => {
        expect(de.nativeElement.querySelector('#profile').textContent).toContain('Profile');
    });

    it('a# should render contents of `Logout`', () => {
        expect(de.nativeElement.querySelector('#logout').textContent).toContain('Logout');
    });

    //signup should route to signup page

    //login should route to login page

    //login should change nav bar elements (should show `Profile` and `Logout`)

    //profile should route to user profile page

    //logout should route to home page

    //logout should change nav bar elements (should show `Sign Up` and `Login`)

});
