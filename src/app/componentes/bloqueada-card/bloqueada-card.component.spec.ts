import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqueadaCardComponent } from './bloqueada-card.component';

describe('BloqueadaCardComponent', () => {
  let component: BloqueadaCardComponent;
  let fixture: ComponentFixture<BloqueadaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueadaCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueadaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
