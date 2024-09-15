import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { IUser } from 'src/types/types';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService,
              private readonly jwtService:JwtService,  
  ){}
// validateUser название произвольно
  async validateUser(email:string,password:string){
    //здесь findOne функция userService(название произвольно названо в userService
    // async findOne(email: string) {
   // return await this.userRepository.findOne({
    //  where:{email,}
   // });
 // }
    //)
    const user= await this.userService.findOne(email)
    
    
    ////этой проверки на существование user не было в видео 
    //при отсутствии user в бд приложение ломалось
    const passwordIsMatch=(user)?await argon2.verify(user.password,password):false
    ////end
    if(user && passwordIsMatch){
      
      return user
    }
    throw new UnauthorizedException('email or password is uncorrect')
  }
  async login(user: IUser) {
    const payload = { id: user.id, email: user.email };
    const{id,email}= user;
    return {
      id,
      email,
      access_token: this.jwtService.sign(payload),
    };
  }
}
