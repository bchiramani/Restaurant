import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPriceComponent } from './search-price.component';

describe('SearchPriceComponent', () => {
  let component: SearchPriceComponent;
  let fixture: ComponentFixture<SearchPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
