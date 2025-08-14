import {createAction, props} from '@ngrx/store';
import {DragonballCharacterModel} from '../../models/dragonball-character.model';


export const getAllCharacters = createAction(
  "[Dragon Ball Action] Get All Characters", props<{page: number, limit: number}>()
)

export const getAllCharactersSuccess = createAction(
  "[Dragon Ball Action] Get All Characters Success", props<{listCharacters: DragonballCharacterModel[]}>()
)

export const getAllCharactersFailure = createAction(
  "[Dragon Ball Action] Get All Characters Failure", props<{error: any}>()
)
