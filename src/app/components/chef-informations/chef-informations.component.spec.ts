import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefInformationsComponent } from './chef-informations.component';

describe('ChefInformationsComponent', () => {
  let component: ChefInformationsComponent;
  let fixture: ComponentFixture<ChefInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
