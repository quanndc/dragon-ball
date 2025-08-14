import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {dragonBallReducer} from './ngrx/dragon-ball/dragon-ball.reducer';

import * as DragonBallEffects from './ngrx/dragon-ball/dragon-ball.effects'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(
      {
        dragonBall: dragonBallReducer
      }
    ),
    provideEffects(
      DragonBallEffects
    )
]
};
