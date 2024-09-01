import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseparams from 'ENV';

@Module({
    imports:[TypeOrmModule.forRootAsync({
        ///////////для чего ConfigModule не знаю...////////////
        imports:[ConfigModule],
        /////////////
        useFactory:(configService:ConfigService)=>({
            type:'postgres',
            /////////////////////////////
            host:configService.getOrThrow('DATABASE_HOST'),
            port:configService.getOrThrow('DATABASE_PORT'),
            database:configService.getOrThrow('DATABASE_NAME'),
            username:configService.getOrThrow('DATABASE_USERNAME'),
            password:configService.getOrThrow('DATABASE_PASSWORD'),
            ////////////////////////////////
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: '1235',
    //   database: 'budget',
    ///////////////////////////////////////
    // host:databaseparams.DATABASE_HOST,
    // port:databaseparams.DATABASE_PORT,
    // database:databaseparams.DATABASE_NAME,
    // username:databaseparams.DATABASE_USERNAME,
    // password:databaseparams.DATABASE_PASSWORD,
    ///////////////////////////////////////

      autoLoadEntities: true,
     synchronize:configService.getOrThrow('DATABASE_SYNCHRONIZE'),
            
        }),
        inject:[ConfigService]
    })]
})
export class DatabaseModule {}
