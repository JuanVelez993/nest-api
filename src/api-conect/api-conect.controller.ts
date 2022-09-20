import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiConectService } from './api-conect.service';
import { CreateApiConectDto } from './dto/create-api-conect.dto';
import { UpdateApiConectDto } from './dto/update-api-conect.dto';

@Controller('api-conect')
export class ApiConectController {
  constructor(private readonly apiConectService: ApiConectService) {}

  @Post()
  create(@Body() createApiConectDto: CreateApiConectDto) {
    return this.apiConectService.create(createApiConectDto);
  }

  @Get()
  findAll() {
    return this.apiConectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiConectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiConectDto: UpdateApiConectDto) {
    return this.apiConectService.update(+id, updateApiConectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiConectService.remove(+id);
  }
}
