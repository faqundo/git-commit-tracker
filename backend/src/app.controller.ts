import { HttpService } from '@nestjs/axios';
import { Controller, Get , Header} from '@nestjs/common';
import { map, catchError, of, lastValueFrom , Observable} from 'rxjs';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpService: HttpService
  ) { }

  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
