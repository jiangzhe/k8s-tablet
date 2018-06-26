import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmapsComponent } from './configmaps.component';

describe('ConfigmapsComponent', () => {
  let component: ConfigmapsComponent;
  let fixture: ComponentFixture<ConfigmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
