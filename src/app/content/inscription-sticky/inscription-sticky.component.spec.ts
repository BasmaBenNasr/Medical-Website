import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionStickyComponent } from './inscription-sticky.component';

describe('InscriptionStickyComponent', () => {
  let component: InscriptionStickyComponent;
  let fixture: ComponentFixture<InscriptionStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionStickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
