import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ExpressCassandraModule } from "@iaminfinity/express-cassandra";
import databaseOptions from "./database.options";

@Module({
    imports: [UsersModule, ExpressCassandraModule.forRoot(databaseOptions)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
