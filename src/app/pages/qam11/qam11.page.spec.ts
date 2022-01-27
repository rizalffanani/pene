import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam11Page } from './qam11.page';

describe('Qam11Page', () => {
  let component: Qam11Page;
  let fixture: ComponentFixture<Qam11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
