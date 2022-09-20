import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';


@Injectable()
export class ApiConectService {
  constructor(private httpService: HttpService) {}
  getCharacters(params) {
    return lastValueFrom(
      this.httpService
        .get(
          `http://gateway.marvel.com/v1/public/characters?ts=${process.env.TIMESTAMP}&apikey=${process.env.APIKEY}&hash=${process.env.HASH}`,
        )
        .pipe(map((res) => res.data)),
    );
  }
}
