import{
 Controller,
 Get
}from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
    constructor(private storeService: StoreService) {}

    @Get('/offersFile')
    async getStoreOffers() {
      return await this.storeService.getStoreOffers();
    }

}