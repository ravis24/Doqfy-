import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FrequentlyUsedComponent } from './frequently-used/frequently-used.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { EChartsComponent } from './e-charts/e-charts.component';
import { ChartModule } from 'angular-highcharts';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FrequentlyUsedComponent,
    OrderDetailsComponent,
    EChartsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ChartModule,
  ],
  providers: [DatePipe,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
