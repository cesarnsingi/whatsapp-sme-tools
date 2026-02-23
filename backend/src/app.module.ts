import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class AppModule {}