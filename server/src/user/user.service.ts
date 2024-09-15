import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from "argon2";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>,
    private readonly jwtService:JwtService,
  ){}
  //названо create произвольно а findOne встроенный метод Repositоry
  async create(createUserDto: CreateUserDto) {
     const userExist = await this.userRepository.findOne({
      where:{
        email:createUserDto.email
      }
     })
     if(userExist) throw new BadRequestException('This email is alredy exist')

      const user = await this.userRepository.save({
    email:createUserDto.email,
    password:await argon2.hash(createUserDto.password,) 
    })
      const access_token=  this.jwtService.sign({email:createUserDto.email})
    return {user,access_token};
  }
///////////////////////////////////////////
  // findAll() {
  //   return `This action returns all user`;
  // }
///////////////////////////////////////////////
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
////////////////////////////////////////////
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
/////////////////////////////////////////////////////
  // remove(id: number) {
  //   return `This  removes a #${id} user`;
  // }
  /////////////////////////////////////////////////////
  //здесь  название функции findOne, наше(произвольное), а в userRepositoty.findOne встроенный
  //метод класса Repository, который находит одного user по email
  async findOne(email: string) {
    return await this.userRepository.findOne({
      where:{email,}
    });
  }
}
