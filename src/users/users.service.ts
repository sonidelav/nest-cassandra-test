import { Injectable } from '@nestjs/common';
import { Repository, InjectRepository } from '@iaminfinity/express-cassandra';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    createNewUser(): Promise<UserEntity> {
        const model = new UserEntity();
        model.name = "User 1";
        model.password = "Password";
        model.email = "test@mail.com";
        return this.userRepository.save(model).toPromise()
    }

    findAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find({}).toPromise();
    }
}
