import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPresentacionComponent } from './crear-presentacion.component';

describe('CrearPresentacionComponent', () => {
  let component: CrearPresentacionComponent;
  let fixture: ComponentFixture<CrearPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPresentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
