import {DragonballCharacterModel} from '../../models/dragonball-character.model';

export interface DragonBallState {
  listCharacters: DragonballCharacterModel[];
  isGettingAllCharacters: boolean;
  isGetAllCharactersSuccess: boolean;
  getAllCharactersError: any;


  detailCharacter: DragonballCharacterModel | null;
  isGettingDetailCharacter: boolean;
  getDetailCharacterError: any;
}
