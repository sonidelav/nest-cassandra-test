import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';

@Module({
  imports: [UsersModule, ExpressCassandraModule.forRoot({})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
