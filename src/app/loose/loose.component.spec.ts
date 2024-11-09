import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooseComponent } from './loose.component';

describe('LooseComponent', () => {
  let component: LooseComponent;
  let fixture: ComponentFixture<LooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LooseComponent]
    });
    fixture = TestBed.createComponent(LooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
