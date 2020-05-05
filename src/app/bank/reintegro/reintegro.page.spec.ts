import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReintegroPage } from './reintegro.page';

describe('ReintegroPage', () => {
  let component: ReintegroPage;
  let fixture: ComponentFixture<ReintegroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReintegroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReintegroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
