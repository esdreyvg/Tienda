import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ProductController, AppController],
  providers: [ProductService, AppService],
})
export class AppModule {}
