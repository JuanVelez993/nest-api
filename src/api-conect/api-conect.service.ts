import { Injectable } from '@nestjs/common';
import { CreateApiConectDto } from './dto/create-api-conect.dto';
import { UpdateApiConectDto } from './dto/update-api-conect.dto';

@Injectable()
export class ApiConectService {
  create(createApiConectDto: CreateApiConectDto) {
    return 'This action adds a new apiConect';
  }

  findAll() {
    return `This action returns all apiConect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiConect`;
  }

  update(id: number, updateApiConectDto: UpdateApiConectDto) {
    return `This action updates a #${id} apiConect`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiConect`;
  }
}
