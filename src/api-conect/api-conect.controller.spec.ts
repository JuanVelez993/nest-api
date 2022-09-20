import { Test, TestingModule } from '@nestjs/testing';
import { ApiConectController } from './api-conect.controller';
import { ApiConectService } from './api-conect.service';

describe('ApiConectController', () => {
  let controller: ApiConectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiConectController],
      providers: [ApiConectService],
    }).compile();

    controller = module.get<ApiConectController>(ApiConectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
