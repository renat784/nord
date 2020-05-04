import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewiewersComponent } from './rewiewers.component';

describe('RewiewersComponent', () => {
  let component: RewiewersComponent;
  let fixture: ComponentFixture<RewiewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewiewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewiewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
