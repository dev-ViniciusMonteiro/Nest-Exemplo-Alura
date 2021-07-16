import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Vinicius monteiro!';
  }

  getPing(Param: string): string {
    if(Param == 'ping'){
      return 'Pong!';
    }else{
      return `Seu parametro: ${Param}`
    }
    
  }
  

  
}
