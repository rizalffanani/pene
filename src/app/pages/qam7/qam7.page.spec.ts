import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam7Page } from './qam7.page';

describe('Qam7Page', () => {
  let component: Qam7Page;
  let fixture: ComponentFixture<Qam7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
