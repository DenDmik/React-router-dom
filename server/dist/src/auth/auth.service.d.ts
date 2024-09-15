import { UserService } from 'src/user/user.service';
import { IUser } from 'src/types/types';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../user/entities/user.entity").User>;
    login(user: IUser): Promise<{
        id: string;
        email: string;
        access_token: string;
    }>;
}
