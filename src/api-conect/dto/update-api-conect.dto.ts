import { PartialType } from '@nestjs/mapped-types';
import { CreateApiConectDto } from './create-api-conect.dto';

export class UpdateApiConectDto extends PartialType(CreateApiConectDto) {}
