import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuotationPage } from './quotation.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('QuotationPage', () => {
  let component: QuotationPage;
  let fixture: ComponentFixture<QuotationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationPage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([{
        path: '',
        component: QuotationPage
      }])]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
