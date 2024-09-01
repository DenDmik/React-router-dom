import { User } from "src/user/entities/user.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
export declare class Category {
    id: number;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    transactions: Transaction[];
    constructor(category: Partial<Category>);
}
