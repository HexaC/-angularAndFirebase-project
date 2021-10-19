import { Component } from '@angular/core';
import { customer } from '../../customer.model';
import { CustomersService } from '../customer-page/customers.service';
import { DisplayModesEnum } from '../customer-page/display-modes.enum';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
  displayMode: DisplayModesEnum = DisplayModesEnum.table;
  DisplayModes = DisplayModesEnum;
  searchFirst: string;
  searchLast: string;
  searchPhone: string;
  customers: customer[];
  currentCustomer: customer;

  constructor(private service: CustomersService) {
    service.getCustomers(data => {
      this.customers = data;
    });
  }

  filterCustomer(customer) {
    return (
      NotMatch(this.searchFirst, customer.first) ||
      NotMatch(this.searchLast, customer.last) ||
      NotMatch(this.searchPhone, customer.phone)
    );

    function NotMatch(
      textFromFilerTextBox: string,
      dataFromCustomerObject: string
    ) {
      return (
        textFromFilerTextBox && dataFromCustomerObject.toLowerCase().indexOf(textFromFilerTextBox.toLowerCase()) == -1
      );
    }
  }
}