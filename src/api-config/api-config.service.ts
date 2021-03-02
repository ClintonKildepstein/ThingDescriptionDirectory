import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  public get dbHostname(): string {
    return this.configService.get('DB_HOSTNAME');
  }

  public get dbPort(): number {
    return this.configService.get('DB_PORT');
  }

  public get dbUsername(): string {
    return this.configService.get('DB_USERNAME');
  }

  public get dbPassword(): string {
    return this.configService.get('DB_PASSWORD');
  }

  public get dbName(): string {
    return this.configService.get('DB_NAME');
  }
}
