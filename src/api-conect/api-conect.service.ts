import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Repository } from 'typeorm';
import { CharacterDto } from './dto/create-character.dto';


@Injectable()
export class ApiConectService {
  constructor(private httpService: HttpService,
    @InjectRepository(Character) private readonly characterRepository: Repository<Character>) {}

  async getCharacters() {
    const url="http://gateway.marvel.com/v1/public/characters"
    
    return await this.httpService
    .get(`${url}?ts=${process.env.TIMESTAMP}&apikey=${process.env.APIKEY}&hash=${process.env.HASH}`
    ).pipe(map((res)=>res.data.data.results.map((res)=>{return {name:res.name,description:res.description,thumbnail:res.thumbnail.path+".jpg"}})))

      
    
  }

  async createCharacter(){
    const characters = this.getCharacters();
    const newChar=(await characters).pipe(map((res)=>this.characterRepository.save(res)));
    return newChar;

  }
}
