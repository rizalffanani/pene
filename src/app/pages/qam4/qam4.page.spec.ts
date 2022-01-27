import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam4Page } from './qam4.page';

describe('Qam4Page', () => {
  let component: Qam4Page;
  let fixture: ComponentFixture<Qam4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
