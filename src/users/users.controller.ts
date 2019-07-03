import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService : UsersService
    ) {}

    @Get('/')
    async getAllUsers() {
        return await this.userService.findAllUsers();
    }

    @Get('/create')
    async createNewUser() {
        return await this.userService.createNewUser();
    }
}
