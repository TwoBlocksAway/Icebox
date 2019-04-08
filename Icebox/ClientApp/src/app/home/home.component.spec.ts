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
        expect(de.nativeElement.querySelector('#welcome').textContent).toContain('icebox');
    });
    
    it('should render placeholder in input#searchBox to be `Search for a food product`', () => {
        expect(de.nativeElement.querySelector('#searchBox').placeholder).toContain('Search for a food product')
    });


    //button#searchBtn should hold img#magnifyingGlass
    //  TODO: Make magnifying glass icon


});
