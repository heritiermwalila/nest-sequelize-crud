import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'src/models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
