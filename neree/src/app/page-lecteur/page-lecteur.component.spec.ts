import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageLecteurComponent } from './page-lecteur.component';

describe('PageLecteurComponent', () => {
  let component: PageLecteurComponent;
  let fixture: ComponentFixture<PageLecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLecteurComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageLecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
