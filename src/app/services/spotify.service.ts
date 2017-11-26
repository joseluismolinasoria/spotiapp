import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  token = 'BQARbMzXo_qmftWbFt5l6JhWEoveyC5wLqk6AJR9LpCTqM-BZZjhVsVE4O0s-x7lmr4m4eR8AqPi0MWCIJIWtw';

  constructor ( public http: HttpClient ) { }

  getArtistas (termino) {
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;

    let headers = new HttpHeaders( {
      'authorization' : 'Bearer ' + this.token
    });

    return this.http.get(url, { headers })
    .map( (resp:any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }


  // getTokenSpotify () {
  //   console.log ('getTokenSpotify');
  //
  //   const url = 'https://accounts.spotify.com/api/token';
  //   const body = {
  //     'grant_type' : 'client_credentials',
  //     'client_id' : '6d35afdf71324ba6a1a5cc5a4740ab57',
  //     'client_secret': 'b0d0647d449e4b32a3a973ef916881cc'
  //   };
  //
  //   console.log ('getTokenSpotify', body);
  //
  //   // const headers = new Headers({ 'Content-Type': 'application/json' });
  //
  //   this.http.post(url, body).subscribe ( (res) => {
  //     console.log ('getTokenSpotify', 'ok', res);
  //     this.token = res['access_token'];
  //     console.log ('getTokenSpotify', 'ok', res['access_token']);
  //   });
  // }

}
