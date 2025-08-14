import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs';
import {DragonballCharacterModel} from '../../models/dragonball-character.model';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  //httpClient
  constructor(private httpClient: HttpClient) {

  }

  getAllCharacters(page: number=0, limit: number=10){
    const response = this.httpClient.get(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`)
    const data = response.pipe(
      map((response: any) => response.items as DragonballCharacterModel[]));
    return data;
  }

  getCharacterById(id: string) {
    const response = this.httpClient.get(`https://dragonball-api.com/api/characters/${id}`)
    return response
  }

}
