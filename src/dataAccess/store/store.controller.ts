import{
 Controller,
 Get,
 Param,
 Put,
 Query
}from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
    constructor(private storeService: StoreService) {}

    @Get('/offers/:userId')
    async getStoreOffers(@Param() params : any): Promise<any> {
      return await this.storeService.getStoreOffers(params.userId);
    }
    @Put('/offers')
    async editOffers(@Query() query : any): Promise<any> {
      return await this.storeService.editStoreOffers(query.id, query.userId);
    }

}