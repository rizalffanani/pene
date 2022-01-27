import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam12Page } from './qam12.page';

describe('Qam12Page', () => {
  let component: Qam12Page;
  let fixture: ComponentFixture<Qam12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
