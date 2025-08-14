import {inject} from '@angular/core';
import {catchError, concatMap, exhaustMap, map, of, switchMap, tap} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {DragonBallService} from '../../services/dragon-ball/dragon-ball.service'
import * as DragonBallActions from './dragon-ball.actions';


export const getAllCharacters = createEffect(
  (action$ = inject(Actions), dragonBallService = inject(DragonBallService)) => {
    return action$.pipe(
      ofType(DragonBallActions.getAllCharacters),
      exhaustMap((action) => dragonBallService.getAllCharacters(action.page, action.limit)
        .pipe(
          map((listCharacters) => DragonBallActions.getAllCharactersSuccess({listCharacters})),
          catchError((error: { message: string }) =>
            of(DragonBallActions.getAllCharactersFailure({error: error.message})
            )
          )
        )
      )
    )
  },
  { functional: true }
)

