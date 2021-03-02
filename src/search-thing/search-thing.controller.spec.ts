import { Test, TestingModule } from '@nestjs/testing';
import { SearchThingController } from './search-thing.controller';

describe('SearchThingController', () => {
  let controller: SearchThingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchThingController],
    }).compile();

    controller = module.get<SearchThingController>(SearchThingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
