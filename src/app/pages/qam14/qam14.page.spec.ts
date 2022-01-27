import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam14Page } from './qam14.page';

describe('Qam14Page', () => {
  let component: Qam14Page;
  let fixture: ComponentFixture<Qam14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
