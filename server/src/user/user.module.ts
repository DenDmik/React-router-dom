import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  ////////////////////////связано с user.entity.ts без этого колонки в БД не обновились
  imports:[TypeOrmModule.forFeature([User])],
  ///////////////////////////
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
