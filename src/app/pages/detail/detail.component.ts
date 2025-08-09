import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonBallService } from '../../services/dragon-ball/dragon-ball.service';
import { DragonballCharacterModel } from '../../models/dragonball-character.model';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute,
    private dragonBallService: DragonBallService
  ){}

  detailCharacter: any;

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    const data = this.dragonBallService.getCharacterById(id);

    data.subscribe((res:any) => {
      console.log(res);
      this.detailCharacter = res;
    })
  }


}
