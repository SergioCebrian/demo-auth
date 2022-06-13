import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    console.log(this.configService.get('DB_HOST'));
    console.log(this.configService.get('DB_PORT'));
    console.log(this.configService.get('DB_NAME'));
    console.log(this.configService.get('DB_USER'));
    console.log(this.configService.get('DB_PASSWORD'));
    return 'Hello World!';
  }
}
