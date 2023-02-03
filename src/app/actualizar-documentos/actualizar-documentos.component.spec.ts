import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDocumentosComponent } from './actualizar-documentos.component';

describe('ActualizarDocumentosComponent', () => {
  let component: ActualizarDocumentosComponent;
  let fixture: ComponentFixture<ActualizarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDocumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
