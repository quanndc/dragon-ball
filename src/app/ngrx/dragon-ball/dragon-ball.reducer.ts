import {DragonBallState} from './dragon-ball.state';
import {createReducer, on} from '@ngrx/store';
import * as DragonBallActions from './dragon-ball.actions'

export const initialState : DragonBallState = {
  listCharacters: [],
  isGettingAllCharacters: false,
  isGetAllCharactersSuccess: false,
  getAllCharactersError: undefined,
  detailCharacter: null,
  isGettingDetailCharacter: false,
  getDetailCharacterError: undefined
}


export const dragonBallReducer = createReducer(
  initialState,

  on(DragonBallActions.getAllCharacters, (state, {type}) => {
    console.log(type)
    return<DragonBallState> {
      ...state,
      isGettingAllCharacters: true,
      getAllCharactersError: undefined,
    }
  }),

  on(DragonBallActions.getAllCharactersSuccess, (state, {type, listCharacters}) => {
    console.log(type)
    return<DragonBallState> {
      ...state,
      isGettingAllCharacters: false,
      isGetAllCharactersSuccess: true,
      listCharacters: listCharacters
    }
  }),

  on(DragonBallActions.getAllCharactersFailure, (state, {type, error}) => {
    console.log(type)
    return<DragonBallState> {
      ...state,
      isGettingAllCharacters: false,
      getAllCharactersError: error
    }
  })
)
