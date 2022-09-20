import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiConectModule } from './api-conect/api-conect.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),ApiConectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
