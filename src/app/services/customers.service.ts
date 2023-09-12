import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Customer {
  id: number;
  name: string;
  age: number;
  membershipType: MembershipType;
}
export interface SaveCustomer {
  name: string;
  age: number;
  membershipTypeId: number;
}
interface MembershipType {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  url = 'http://localhost:5112/api/customers/';

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Customer[]>(this.url);
  }
  getSingle(id: any) {
    return this.http.get(this.url + id);
  }
  update(id: number, customer: SaveCustomer) {
    return this.http.put(this.url + id, customer);
  }
  create(customer: SaveCustomer) {
    return this.http.post(this.url, customer);
  }
  delete(id: number) {
    return this.http.delete(this.url + id);
  }
}
