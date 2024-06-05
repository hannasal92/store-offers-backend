import { Injectable, NotFoundException } from '@nestjs/common';
const fs = require('node:fs');

@Injectable()
export class StoreService {
  constructor(
    ){}

    async getStoreOffers() {
        try {
            const data = fs.readFileSync('./src/Offers/Store-Offers.json', 'utf8');
            const fileContent = JSON.parse(data) ;
            return fileContent ;
          } catch (err) {
            throw new NotFoundException("File not found")
          }
    }
}