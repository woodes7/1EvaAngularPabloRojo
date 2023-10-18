import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaDetallesComponent } from './asignatura-detalles.component';

describe('AsignaturaDetallesComponent', () => {
  let component: AsignaturaDetallesComponent;
  let fixture: ComponentFixture<AsignaturaDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturaDetallesComponent]
    });
    fixture = TestBed.createComponent(AsignaturaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
