import { Controller, UseGuards, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post,Get } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { LocalAuthGuard , } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
  
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
 @Get('profile')
  @UseGuards(JwtAuthGuard)
 
  getProfile(@Request() req) {
    return req.user;
  }
}
