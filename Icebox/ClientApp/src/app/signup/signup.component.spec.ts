import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
    let component: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render contents of div#signupTitle to be `Creating a new icebox account`', () => {
        expect(de.nativeElement.querySelector('#signupTitle').textContent).toContain('Creating a new icebox account');
    });

    it('should render placeholder of input#firstName to be `First Name`', () => {
        expect(de.nativeElement.querySelector('#firstName').placeholder).toBe('First Name');
    });

    it('should render placeholder of input#lastName to be `Last Name`', () => {
        expect(de.nativeElement.querySelector('#lastName').placeholder).toBe('Last Name');
    });

    it('should render placeholder of input#email to be `Email`', () => {
        expect(de.nativeElement.querySelector('#email').placeholder).toBe('Email');
    });

    it('should render placeholder of input#confirmEmail to be `Confirm Email`', () => {
        expect(de.nativeElement.querySelector('#confirmEmail').placeholder).toBe('Confirm Email');
    });

    it('should render placeholder of input#password to be `Password`', () => {
        expect(de.nativeElement.querySelector('#password').placeholder).toBe('Password');
    });

    it('should render placeholder of input#confirmPassword to be `Confirm Password`', () => {
        expect(de.nativeElement.querySelector('#confirmPassword').placeholder).toBe('Confirm Password');
    });

    it('should render contents of button#createAccountBtn to be `CREATE ACCOUNT`', () => {
        expect(de.nativeElement.querySelector('#createAccountBtn').textContent).toContain('CREATE ACCOUNT');
    });
    
});
