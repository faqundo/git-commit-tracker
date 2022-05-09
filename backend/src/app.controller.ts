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

  
  @Get('/commits')
  getAllCommits(){
    
    const url = 'https://api.github.com/repos/faqundo/NestJS-Udemy-Course/commits';
    //const url = env("BASE_URL") + '/repos/';

    return this.httpService
      .get(url )
      .pipe(
        map((res: AxiosResponse) => {
          return res.data
        }),
        catchError((err) => {
          return of(err)
        }),
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}