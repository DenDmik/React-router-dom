import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';


@Module({
  //на хера тут PassportModule ??, работает и без него
  imports:[UserModule,PassportModule],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy],
})
export class AuthModule {}
