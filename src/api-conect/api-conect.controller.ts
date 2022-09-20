import { Controller, Get, Query} from '@nestjs/common';
import { ApiConectService } from './api-conect.service';
import { CreateApiConectDto } from './dto/create-api-conect.dto';
import { UpdateApiConectDto } from './dto/update-api-conect.dto';

@Controller('api')
export class ApiConectController {
  constructor(private readonly apiConectService: ApiConectService) {}

  @Get('marvel')
  getCharacters(@Query() params: CreateApiConectDto) {
    return this.apiConectService.getCharacters();
  }
}
