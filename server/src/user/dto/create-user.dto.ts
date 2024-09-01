import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email:string

    @MinLength(4,{message:'Password must have more then 4 symbols'})
    password:string;

  
}
