import { Test, TestingModule } from '@nestjs/testing';
import { SearchThingService } from './search-thing.service';

describe('SearchThingService', () => {
  let service: SearchThingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchThingService],
    }).compile();

    service = module.get<SearchThingService>(SearchThingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
