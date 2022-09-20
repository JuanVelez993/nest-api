import { Test, TestingModule } from '@nestjs/testing';
import { ApiConectService } from './api-conect.service';

describe('ApiConectService', () => {
  let service: ApiConectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiConectService],
    }).compile();

    service = module.get<ApiConectService>(ApiConectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
