import{
 Controller,
 Get,
 Param,
 Put
}from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
    constructor(private storeService: StoreService) {}

    @Get('/offers')
    async getStoreOffers() {
      return await this.storeService.getStoreOffers();
    }
    @Put('/offers/:id')
    async editOffers(@Param() params : any):Promise<any> {
      return await this.storeService.editStoreOffers(params.id);
    }

}