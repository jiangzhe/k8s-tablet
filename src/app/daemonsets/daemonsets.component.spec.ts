import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemonsetsComponent } from './daemonsets.component';

describe('DaemonsetsComponent', () => {
  let component: DaemonsetsComponent;
  let fixture: ComponentFixture<DaemonsetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaemonsetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
