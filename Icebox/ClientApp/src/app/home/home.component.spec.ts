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

    //create a div#container

    //create an h1#welcome

    it('should render title in h1#welcome', () => {
        expect(de.nativeElement.querySelector('#welcome').textContent).toContain('icebox');
    });

    //should create input#searchBox

    //input#searchbox should have placeholder `Search for a food product`

    //should create button#searchBtn

    //should create img#magnifySearch

    //button#searchBtn should hold img#magnifySearch

    //should create button#features

});
