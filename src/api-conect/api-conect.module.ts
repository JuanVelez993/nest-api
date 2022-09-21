import { Module } from '@nestjs/common';
import { ApiConectService } from './api-conect.service';
import { ApiConectController } from './api-conect.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  TypeOrmModule.forFeature([Character])],
  controllers: [ApiConectController],
  providers: [ApiConectService],
  exports: [HttpModule,TypeOrmModule],
})
export class ApiConectModule {}
