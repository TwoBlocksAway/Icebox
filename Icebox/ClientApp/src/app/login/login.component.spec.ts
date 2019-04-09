import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should render contents of div#loginTitle to be `Login with your icebox account`', () => {
        expect(de.nativeElement.querySelector('#loginTitle').textContent).toContain('Login with your icebox account');
    });

    it('should render placeholder of input#email to be `Enter your email address`', () => {
        expect(de.nativeElement.querySelector('#email').placeholder).toBe('Enter your email address');
    });

    it('should have input#password to be of type password', () => {
        expect(de.nativeElement.querySelector('#password').type).toBe('password');
    });
    it('should render placeholder of input#password to be `Enter your password`', () => {
        expect(de.nativeElement.querySelector('#password').placeholder).toBe('Enter your password');
    });
    
    it('should render contents of a#forgotPassword to be `Forgot Password?`', () => {
        expect(de.nativeElement.querySelector('#forgotPassword').textContent).toContain('Forgot Password?')
    });

    it('should render contents of button#loginBtn to be `LOGIN`', () => {
        expect(de.nativeElement.querySelector('#loginBtn').textContent).toContain('LOGIN');
    });

    it('should render contents of a#newAccount to be `Create a new account`', () => {
        expect(de.nativeElement.querySelector('#newAccount').textContent).toContain('Create a new account');
    });

    it('should render contents of div#googleLogin to be `Login with your google account`', () => {
        expect(de.nativeElement.querySelector('#googleLogin').textContent).toContain('Login with your google account');
    });

    it('should render contents of div#facebookLogin to be `Login with your facebook account`', () => {
        expect(de.nativeElement.querySelector('#facebookLogin').textContent).toContain('Login with your facebook account');
    });

});
