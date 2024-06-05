import { Injectable, NotFoundException } from '@nestjs/common';
const fs = require('node:fs');

interface IOffer{
  limit:number,
  id:string,
  buyLeft:number
}

@Injectable()
export class StoreService {
  jsonPath = './src/Offers/Store-Offers.json'

  constructor(
    ){}

    async getStoreOffers() {
        try {
            const data = fs.readFileSync(this.jsonPath, 'utf8');
            const fileContent = JSON.parse(data) ;
            return fileContent ;
          } catch (err) {
            throw new NotFoundException("File not found")
          }
    }

    async editStoreOffers(id : string) {
      try {
          const data = fs.readFileSync(this.jsonPath, 'utf8');
          const offers:Array<IOffer> = JSON.parse(data).offers
          offers.forEach((offer:IOffer)=>{
            if(offer.id === id){
              offer.buyLeft-=1
            }
          })
          fs.writeFile(this.jsonPath, JSON.stringify({offers}), 'utf8', (err) => {
            if (err) {
              console.error('Error writing to file:', err);
              return;
            }
            console.log('Data has been written to', this.jsonPath);
          });
          return offers;
        } catch (err) {
          throw new NotFoundException("File not found")
        }
  }

}