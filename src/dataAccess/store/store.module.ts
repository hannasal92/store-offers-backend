import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';

@Module({
  imports: [],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
