import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import { UserEntity } from './user.entity';

@Module({
  imports: [ExpressCassandraModule.forFeature([UserEntity])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
