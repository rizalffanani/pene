import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam8Page } from './qam8.page';

describe('Qam8Page', () => {
  let component: Qam8Page;
  let fixture: ComponentFixture<Qam8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
