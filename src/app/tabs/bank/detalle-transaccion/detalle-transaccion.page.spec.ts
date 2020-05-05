import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleTransaccionPage } from './detalle-transaccion.page';

describe('DetalleTransaccionPage', () => {
  let component: DetalleTransaccionPage;
  let fixture: ComponentFixture<DetalleTransaccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTransaccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
