import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargarPage } from './recargar.page';

describe('RecargarPage', () => {
  let component: RecargarPage;
  let fixture: ComponentFixture<RecargarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
