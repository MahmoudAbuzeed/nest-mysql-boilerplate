import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { StackHolderModule } from './stack-holder/stack-holder.module';
import { StackHolderEntity } from './stack-holder/entities/stack-holder.entity';
import { ProjectEntity } from './project/entities/project.entity';
import { ProjectModule } from './project/project.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'mysqldb',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [ProjectEntity, StackHolderEntity],
      synchronize: true,
    }),
    ProjectModule,
    StackHolderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
