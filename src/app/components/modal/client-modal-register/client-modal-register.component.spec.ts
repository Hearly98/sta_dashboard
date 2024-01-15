import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientModalRegisterComponent } from './client-modal-register.component';

describe('ClientModalRegisterComponent', () => {
  let component: ClientModalRegisterComponent;
  let fixture: ComponentFixture<ClientModalRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientModalRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientModalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
