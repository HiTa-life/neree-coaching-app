import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageRedacteurComponent } from './page-redacteur.component';

describe('PageRedacteurComponent', () => {
  let component: PageRedacteurComponent;
  let fixture: ComponentFixture<PageRedacteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRedacteurComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageRedacteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
