import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaugeComponent } from './jauge.component';

describe('JaugeComponent', () => {
  let component: JaugeComponent;
  let fixture: ComponentFixture<JaugeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JaugeComponent]
    });
    fixture = TestBed.createComponent(JaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});