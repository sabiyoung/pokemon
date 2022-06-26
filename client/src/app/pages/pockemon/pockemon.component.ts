import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-pockemon',
  templateUrl: './pockemon.component.html',
  styleUrls: ['./pockemon.component.scss']
})
export class PockemonComponent implements OnInit {
listPokemon$ = this.store.pokemon$;
  constructor(
    private pokemonService:PokemonService,
    private store: StoreService
    ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon();
  }
  next() {
    this.pokemonService.getNextPokemonList();
  }
  back() {
    this.pokemonService.getLastPokemonList();
  }
}
