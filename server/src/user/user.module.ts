import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

@Module({
  ////////////////////////связано с user.entity.ts без этого колонки в БД не обновились
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync({
    imports:[ConfigModule],
    useFactory:(configService:ConfigService)=>({
      secret:configService.getOrThrow('JWT_SECRET'),
      signOptions:{expiresIn:'30d'},
    }),
    inject:[ConfigService]
  })],
  ///////////////////////////
  controllers: [UserController],
  providers: [UserService,],
  exports:[UserService],
})
export class UserModule {}
