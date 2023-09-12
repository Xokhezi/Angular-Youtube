import { Component } from '@angular/core';
import { Customer, CustomersService } from './services/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project';
  isLoading = true;
  customers: Customer[] = [];

  constructor(private service: CustomersService) {}

  ngOnInit(): void {
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
}
