import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cats/entities/cat.entity';
import { ProjectEntity } from './project/entities/project.entity';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysqldb',
      username: 'root',
      password: 'root',
      database: 'grantsAndLoans',
      entities: [CatEntity, ProjectEntity],
      synchronize: true,
    }),
    CatsModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
