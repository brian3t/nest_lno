import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'lno nest brian!';
  }
}
