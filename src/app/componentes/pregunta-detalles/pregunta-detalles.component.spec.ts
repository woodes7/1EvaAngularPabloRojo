import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaDetallesComponent } from './pregunta-detalles.component';

describe('PreguntaDetallesComponent', () => {
  let component: PreguntaDetallesComponent;
  let fixture: ComponentFixture<PreguntaDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntaDetallesComponent]
    });
    fixture = TestBed.createComponent(PreguntaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
