import { Column, Entity, PrimaryGeneratedColumn,UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "src/user/entities/user.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
@Entity()
export class Category {
    @PrimaryGeneratedColumn({name:'category_id'})
    id:number;

    @Column()
    title:string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @ManyToOne(()=>User,(user)=>user.categories)
    @JoinColumn({name:'user_id'})
    user:User;

    @OneToMany(()=>Transaction,(transaction)=>transaction.category)
    transactions:Transaction[]


    constructor(category:Partial<Category>){
                  Object.assign(this,category)
    }
}
