import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CommandModule} from "nestjs-command";
import {UserCommand} from "./user/user.command";
import {UserService} from "./user/service";

@Module({
  imports: [CommandModule],
  controllers: [AppController],
  providers: [AppService, UserCommand, UserService],
})
export class AppModule {}
