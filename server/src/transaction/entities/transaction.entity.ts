import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()

export class Transaction {

    @PrimaryGeneratedColumn({name:'transaction_id'})
id:number;

@Column()
title:string;

@Column()
type:string;

@Column({nullable:true})
amount:number
    
@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;

@ManyToOne(()=>User,(user)=>user.transactions)
@JoinColumn({name:'user_id'})
user:User;

@ManyToOne(()=>Category,(category)=>category.transactions)
@JoinColumn({name:'category_id'})
category:Category;

constructor(transaction:Partial<Transaction>){
    Object.assign(this,transaction)
}
}
