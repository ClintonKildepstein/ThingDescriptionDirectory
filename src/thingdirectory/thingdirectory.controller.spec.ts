import { Test, TestingModule } from '@nestjs/testing';
import { ThingdirectoryController } from './thingdirectory.controller';

describe('ThingdirectoryController', () => {
  let controller: ThingdirectoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThingdirectoryController],
    }).compile();

    controller = module.get<ThingdirectoryController>(ThingdirectoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
