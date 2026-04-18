import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}

// Envorinment variable are tipically used to store configuration settings and other values
// that may vary between different environments (e.g., development, staging, production).
// They allow you to easily switch between different configurations without having to modify the codebase.
// In Angular, you can define environment variables in the `src/environments` folder,
// where you can create separate files for each environment 
// (e.g., `environment.ts` for development and `environment.prod.ts` for production).
// You can then access these variables in your services or components using the `environment` object.