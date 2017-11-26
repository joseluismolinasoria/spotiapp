import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  
  tracks: any[] = [];

  constructor ( private activatedRoute: ActivatedRoute,
                public spotify: SpotifyService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( parametros => {
      console.log (parametros);
      this.spotify.getArtista(parametros.id).subscribe( artista =>  {
        this.artista = artista;
      });
      this.spotify.getTop(parametros.id).subscribe( (tracks:any[]) =>  {
        this.tracks = tracks;
      });
    });
  }

}
