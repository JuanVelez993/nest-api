import { Module } from '@nestjs/common';
import { ApiConectService } from './api-conect.service';
import { ApiConectController } from './api-conect.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ApiConectController],
  providers: [ApiConectService],
})
export class ApiConectModule {}
