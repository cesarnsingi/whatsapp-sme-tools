import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  create(product: Product): Product {
    this.products.push(product);
    return product;
  }
}
