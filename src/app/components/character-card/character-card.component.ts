import { Component, Input } from '@angular/core';
import { DragonballCharacterModel } from '../../models/dragonball-character.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-character-card',
  imports: [RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input() item!: DragonballCharacterModel;
}
