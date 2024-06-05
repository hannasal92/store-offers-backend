import { Injectable, NotFoundException } from '@nestjs/common';
import { IOffer } from '../../interfaces/IOffer';
const fs = require('node:fs');


@Injectable()
export class StoreService {
  jsonPath = './src/Offers/Store-Offers.json'

  constructor(){}

    async getStoreOffers(userId: string) {
        try {
            const data = fs.readFileSync(this.jsonPath, 'utf8');
            const fileContent = JSON.parse(data)[userId] ;
            return fileContent ;
          } catch (err) {
            throw new NotFoundException("File not found")
          }
    }
    
    async editStoreOffers(id : string, userId: string) {
      try {
          const data = fs.readFileSync(this.jsonPath, 'utf8');
          const offers:Array<IOffer> = JSON.parse(data)[userId].offers;

          offers.forEach((offer:IOffer)=>{
            if(offer.id === id){
              offer.buyLeft -= 1
            }
          })

          const updatedData = {
            ...JSON.parse(data),
            [userId]:{
              offers
            }
          }

          fs.writeFile(this.jsonPath, JSON.stringify(updatedData), 'utf8', (err) => {
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