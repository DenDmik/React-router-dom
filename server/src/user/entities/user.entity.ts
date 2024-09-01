import { Category } from "src/category/entities/category.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string;
     
  //   @Column({ default: true })
  // isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // @Column()
    // name:string

    @OneToMany(()=>Category,(category)=>{category.user},{onDelete:'CASCADE'})
    categories:Category[]

    @OneToMany(()=>Transaction,(transaction)=>transaction.user,{onDelete:'CASCADE'})
    transactions:Transaction[]
////////////////связано с user.module.ts, без этого колонки в БД не обновились
//////////////////// 25.08 без этой записи все обновляется, вообщем не понятно 
    // constructor(user:Partial<User>){
    //     Object.assign(this,user)
    // }
    ////////////////////////
}
