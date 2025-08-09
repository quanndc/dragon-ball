import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  //httpClient
  constructor(private httpClient: HttpClient) {

  }

  getAllCharacters(){
    const response = this.httpClient.get(`https://dragonball-api.com/api/characters?page=1&limit=20`)
    return response
  }

  getCharacterById(id: string) {
    const response = this.httpClient.get(`https://dragonball-api.com/api/characters/${id}`)
    return response
  }

}
