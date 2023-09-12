import { Component } from '@angular/core';
import {
  Customer,
  CustomersService,
  SaveCustomer,
} from './services/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project';
  isLoading = true;
  customers: Customer[] = [];
  customerToSave: SaveCustomer = {} as SaveCustomer;

  constructor(private service: CustomersService) {}

  ngOnInit(): void {
    this.getusers();
  }
  getusers() {
    this.service.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.customers = data;
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
      },
      complete: () => {
        this.isLoading = false;
        console.log('Finished');
      },
    });
  }
  saveUser() {
    this.service.create(this.customerToSave).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Finished');
        this.getusers();
      },
    });
  }
  updateUser(id: number) {
    this.service.update(id, this.customerToSave).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Finished');
        this.getusers();
      },
    });
  }
  deleteUser(id: number) {
    this.service.delete(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Finished');
        this.getusers();
      },
    });
  }
}
