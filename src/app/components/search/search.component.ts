import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  termino: string = '';

  constructor ( private spotify : SpotifyService ) {
  }

  buscarArtista () {
    if ( this.termino.length == 0 ) {
      return;
    }

    this.spotify.getArtistas(this.termino).subscribe ( artistas => {
      console.log ('Artistas', artistas);
    });
  }


}
