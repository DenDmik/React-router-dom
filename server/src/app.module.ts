import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import configuration from 'configuration';
@Module({
  imports: [ 
    ConfigModule.forRoot({isGlobal:true,
      /////////проверка подключения БД через configuration(без DatabaseModule)
      ////////также , эта строчка необходима для подключения port1:3001 через .env
                           load:[configuration]
     ///////////////////////////////////////                      
    }),
    UserModule, 
    CategoryModule,
     AuthModule,
     TransactionModule,
     ///////////////////////
    DatabaseModule,
     ////////////////////////////////
    //  проверка подключения БД напрямую(без DatabaseModule)
    ////////////////////////////////////////////
    //  TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: '1235',
    //   database: 'budget',
    //   autoLoadEntities:true,
    //   synchronize: true,
    //  })
     ////////////////////////////////
    ///////////////////////////////////////////////
        ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
