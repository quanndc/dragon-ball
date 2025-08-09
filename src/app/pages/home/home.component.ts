import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../../services/dragon-ball/dragon-ball.service';
import { DragonballCharacterModel } from '../../models/dragonball-character.model';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";

@Component({
  selector: 'app-home',
  imports: [CharacterCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private dragonBallService: DragonBallService) {}
  data : DragonballCharacterModel[] = []

  ngOnInit() {
    this.dragonBallService.getAllCharacters().subscribe((response: any) => {
      console.log(response);
      this.data = response.items
    })
  }
}
