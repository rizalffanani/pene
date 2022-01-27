import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Qam13Page } from './qam13.page';

describe('Qam13Page', () => {
  let component: Qam13Page;
  let fixture: ComponentFixture<Qam13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Qam13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Qam13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
