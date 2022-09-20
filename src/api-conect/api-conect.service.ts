import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';


@Injectable()
export class ApiConectService {
  constructor(private httpService: HttpService) {}

  async getCharacters() {
    const url="http://gateway.marvel.com/v1/public/characters"
    
    return await this.httpService
        .get(`${url}?ts=${process.env.TIMESTAMP}&apikey=${process.env.APIKEY}&hash=${process.env.HASH}`
        ).pipe(map((res)=>res.data.data.results.map((res)=>{return {name:res.name,description:res.description}})))

      
    
  }
}
