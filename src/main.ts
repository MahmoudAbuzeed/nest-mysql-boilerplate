import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      whitelist: true,
      // forbidNonWhitelisted: process.env.NODE_ENV === 'development',
    }),
  );

  await app.listen(3000);
}
bootstrap();
