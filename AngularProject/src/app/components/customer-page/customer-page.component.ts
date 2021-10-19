import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { customer } from '../../customer.model';
import { DisplayModesEnum } from './display-modes.enum';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {
  displayMode: DisplayModesEnum = DisplayModesEnum.table;

  DisplayModes = DisplayModesEnum;

  customers: customer[];

  currentCustomer: customer;

  createCustomer() {
    this.service.addCustomer(this.currentCustomer);
    this.displayMode = DisplayModesEnum.table;
  }

  editCustomer(customerToEdit: customer) {
    this.displayMode = DisplayModesEnum.edit;
    this.currentCustomer = customerToEdit; // Shows the the current details of the customer in the edit table option 
  }

  updateCustomer() {
    this.service.updateCustomer(this.currentCustomer);
    this.displayMode = DisplayModesEnum.table;
  }

  displayCustomerDetails(customerToDisplay: customer) {
    this.currentCustomer = customerToDisplay;
    this.displayMode = DisplayModesEnum.details;
  }

  removeCustomer(customerToRemove: customer) {
    if (confirm('Are you sure? **Deletion is permanent and can not be restored!')) {
      this.service.removeCust(customerToRemove);
    }
  }

  addCustomer() {
    this.currentCustomer = new customer();
    this.displayMode = DisplayModesEnum.add;
    document.getElementById("first").style.visibility = "hidden";
  }
  constructor(private service: CustomersService) {
    service.getCustomers(data => {
      this.customers = data;
    });
  }

  searchFirst: string;
  searchLast: string;
  searchPhone: string;
  searchEmail: string;

  filterCustomer(customer) {
    return (
      NotMatch(this.searchFirst, customer.first) ||
      NotMatch(this.searchLast, customer.last) ||
      NotMatch(this.searchPhone, customer.phone) ||
      NotMatch(this.searchEmail, customer.email)
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
  
  @ViewChild('first') first: ElementRef;

  disappear() {
    document.getElementById("first").style.visibility = "hidden";
  }
}