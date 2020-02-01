import { Component, OnInit } from '@angular/core';
import { Quotation, QuotationClass } from 'src/model/Quotation';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.page.html',
  styleUrls: ['./quotation.page.scss'],
})
export class QuotationPage implements OnInit {


  quotation: QuotationClass;

  constructor(public showQuotation: AlertController, private router: Router) {
    this.quotation = new QuotationClass();
    this.quotation.addQuotation('Everyting is possible');
    this.quotation.addQuotation('Only I can change the life. No one can do it for me');
    this.quotation.addQuotation('Sometimes we are tested not to show our weaknesses, but to discover our strengths');
    this.quotation.addQuotation('If you cannot do great things, do small in a great way');
    this.quotation.addQuotation('You will never always be motivated, so you must learn to by disciplined');
    // tslint:disable-next-line:max-line-length
    this.quotation.addQuotation('Belive in yourself, you are braver than you think, more talented than you know, and capble of more than you imagine');
  }

  ngOnInit(): void {
    this.presentAlert();
  }

  async presentAlert() {
    const showQuote = this.quotation.quotationList[Math.floor(Math.random() * this.quotation.quotationList.length)];
    const alert = await this.showQuotation.create({
      header: 'Quote',
      message: showQuote.describe,
      cssClass: 'quation',
      // buttons: [{
      //   text: 'OK',
      //   handler: () => {
      //     this.router.navigate(['/home']);
      //   }
      // }],
      // backdropDismiss: true
    });
    await alert.present();
    this.router.navigate(['/home2']);
  }

}
