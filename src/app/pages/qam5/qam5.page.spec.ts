import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam5Page } from './qam5.page';

describe('Qam5Page', () => {
  let component: Qam5Page;
  let fixture: ComponentFixture<Qam5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
