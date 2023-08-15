import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  orderDetails = [
    {'count':18,'name':'Total Orders','order_percentage':2.4,'progress_color':'#a4ddaa','progress_bg_color':'#b9e6bf','icon':''},
    {'count':10,'name':'In Progress','order_percentage':2.4,'progress_color':'#a4ddaa','progress_bg_color':'#b9e6bf','icon':''},
    {'count':5,'name':'Competed Order','order_percentage':2.4,'progress_color':'#a4ddaa','progress_bg_color':'#b9e6bf','icon':''},
    {'count':3,'name':'Cancelled Order','order_percentage':2.4,'progress_color':'#fccfd1','progress_bg_color':'#f7a0a7','icon':''},
  ]
}
