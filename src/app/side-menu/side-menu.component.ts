import { Component } from '@angular/core';
import { DatePipe,CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  formattedDate: string='';
  formattedMoney: string;
  cardDataArray = [
    {'id':'#trd3546','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#3325577','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#trd3546','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#3325577','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#trd3546','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#3325577','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#trd3546','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#3325577','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#trd3546','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#3325577','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#trd3546','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#3325577','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#trd3546','description':'2 files are waiting to Uploaded','days_remaining':10},
    {'id':'#3325577','description':'3 files are waiting to Uploaded','days_remaining':10},
]

  constructor(private datePipe: DatePipe,private currencyPipe: CurrencyPipe) {
    const currentDate = new Date();
    const formattedDateString = this.datePipe.transform(currentDate, 'dd MMM, yyyy-E') ?? '';
    this.formattedDate = formattedDateString;

    const amount = 250000;
    this.formattedMoney = this.currencyPipe.transform(amount, 'INR', 'symbol', '1.2-2') ?? '';
  }

}
