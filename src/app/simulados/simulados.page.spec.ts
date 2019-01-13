import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladosPage } from './simulados.page';

describe('SimuladosPage', () => {
  let component: SimuladosPage;
  let fixture: ComponentFixture<SimuladosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
