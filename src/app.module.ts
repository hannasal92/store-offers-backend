import { Module } from '@nestjs/common';
import { StoreModule } from './dataAccess/store/store.module';



@Module({
  imports: [StoreModule],
  controllers: [],
})
export class AppModule {}


// MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING)