import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneOscillanteComponent } from './ligne-oscillante.component';

describe('LigneOscillanteComponent', () => {
  let component: LigneOscillanteComponent;
  let fixture: ComponentFixture<LigneOscillanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LigneOscillanteComponent]
    });
    fixture = TestBed.createComponent(LigneOscillanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
