import { Test, TestingModule } from '@nestjs/testing';
import { ThingdirectoryService } from './thingdirectory.service';

describe('ThingdirectoryService', () => {
  let service: ThingdirectoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThingdirectoryService],
    }).compile();

    service = module.get<ThingdirectoryService>(ThingdirectoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
