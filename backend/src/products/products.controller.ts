import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.interface';
import { randomUUID } from 'crypto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() body: Omit<Product, 'id'>): Product {
    const product: Product = {
      id: randomUUID(),
      ...body,
    };

    return this.productsService.create(product);
  }
}