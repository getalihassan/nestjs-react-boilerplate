import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'projectz',
      entities: ['dist/src/**/*.entity.js'],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
