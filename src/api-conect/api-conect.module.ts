import { Module } from '@nestjs/common';
import { ApiConectService } from './api-conect.service';
import { ApiConectController } from './api-conect.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [ApiConectController],
  providers: [ApiConectService],
  exports: [HttpModule],
})
export class ApiConectModule {}
