import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
export declare class Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    category: Category;
    constructor(transaction: Partial<Transaction>);
}
