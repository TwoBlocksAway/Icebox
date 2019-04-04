import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title in h1#welcome', () => {
        expect(de.nativeElement.querySelector('#welcome').textContent).toContain('Icebox');
    });

    it('should render h1#welcome to be text aligned to `center`', () => {
        expect(de.query(By.css('h1#welcome')).nativeElement.textAlign).toBe('center');
    });

    it('should render h1#welcome text color to be `blue`', () => {
        expect(de.query(By.css('#welcome')).nativeElement.color).toBe('blue');
    });

});
