import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    validateUser(email: string, password: string): Promise<import("../user/entities/user.entity").User>;
}
