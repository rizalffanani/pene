import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam10Page } from './qam10.page';

describe('Qam10Page', () => {
  let component: Qam10Page;
  let fixture: ComponentFixture<Qam10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
