import {Component, inject, OnInit} from '@angular/core';
import { DragonBallService } from '../../services/dragon-ball/dragon-ball.service';
import { DragonballCharacterModel } from '../../models/dragonball-character.model';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Observable, Subject} from 'rxjs';
import {DragonBallState} from '../../ngrx/dragon-ball/dragon-ball.state';
import {Store} from '@ngrx/store';

import * as DragonBallActions from '../../ngrx/dragon-ball/dragon-ball.actions';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  imports: [CharacterCardComponent, MatPaginatorModule, AsyncPipe, MatProgressSpinner],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, MatPaginatorIntl {
  characters$!: Observable<DragonballCharacterModel[]>
  isLoading$!: Observable<boolean>
  isGetAllCharactersSuccess$!: Observable<boolean>

  private _snackBar = inject(MatSnackBar);
  constructor(private store: Store<{dragonBall: DragonBallState}>) {
    this.characters$ = this.store.select('dragonBall','listCharacters')
    this.isLoading$ = this.store.select('dragonBall', 'isGettingAllCharacters')
    this.isGetAllCharactersSuccess$ = this.store.select('dragonBall', 'isGetAllCharactersSuccess');
  }



  ngOnInit() {
    this.store.dispatch(DragonBallActions.getAllCharacters({page: 1, limit: 100}))
    this.isGetAllCharactersSuccess$.subscribe((value) => {
      if(value){
        this._snackBar.open("Get all characters success", "Close", {
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      }
    })
    this.characters$.subscribe((data) => {
      console.log(data)
    })
  }

  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

    getRangeLabel(page: number, pageSize: number, length: number): string {

    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  };

  // paginate(event: any) {
  //   const page = event.pageIndex + 1; // MatPaginator uses 0-based index
  //   const limit = event.pageSize;
  //   this.dragonBallService.getAllCharacters(page, limit).subscribe((response: any) => {
  //     console.log(response);
  //     this.data = response.items;
  //     this.meta = response.meta;
  //     this.changes.next(); // Notify that the paginator has changed
  //   })
  // }
}
