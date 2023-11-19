import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartementComponent } from './details-apartement.component';

describe('DetailsApartementComponent', () => {
  let component: DetailsApartementComponent;
  let fixture: ComponentFixture<DetailsApartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsApartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
