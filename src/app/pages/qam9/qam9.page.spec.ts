import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam9Page } from './qam9.page';

describe('Qam9Page', () => {
  let component: Qam9Page;
  let fixture: ComponentFixture<Qam9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
