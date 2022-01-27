import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam3Page } from './qam3.page';

describe('Qam3Page', () => {
  let component: Qam3Page;
  let fixture: ComponentFixture<Qam3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
