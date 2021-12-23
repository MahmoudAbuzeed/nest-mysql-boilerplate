import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { StackHolderModule } from './stack-holder/stack-holder.module';
import { StackHolderEntity } from './stack-holder/entities/stack-holder.entity';
import { ProjectEntity } from './project/entities/project.entity';
import { AttachmentEntity } from './attachment/entities/attachment.entity';
import { ComponentEntity } from './component/entities/component.entity';
import { ProjectHistoryEntity } from './project-history/entities/project-history.entity';
import { ProjectModule } from './project/project.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttachmentModule } from './attachment/attachment.module';
import { ProjectHistoryModule } from './project-history/project-history.module';
import { ComponentModule } from './component/component.module';

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
      entities: [
        ProjectEntity,
        StackHolderEntity,
        AttachmentEntity,
        ProjectHistoryEntity,
        ComponentEntity,
      ],
      synchronize: true,
    }),
    ProjectModule,
    StackHolderModule,
    AttachmentModule,
    ProjectHistoryModule,
    ComponentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
