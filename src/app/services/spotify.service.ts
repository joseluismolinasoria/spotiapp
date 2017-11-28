import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlSpotify: string = 'https://api.spotify.com/v1/';

  artistas: any[] = [];

  token: string = 'BQAFDA7BxL13yiZNb2idSDCO0_CK_shfQnC1wp3DXbU0Gberxnzfbr4gNNLTgjxAUFomsR2CXTptC3Rsdu0';

  constructor ( public http: HttpClient ) { }

  private headers ():HttpHeaders {
    return new HttpHeaders( {
      'authorization' : `Bearer ${ this.token }`
    });
  }

  getArtistas (termino) {
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&offset=0&limit=20`;

    return this.http.get(url, { headers: this.headers() })
    .map( (resp:any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }

  getArtista ( id: string ) {
    let url = `${ this.urlSpotify }artists/${ id }`;

    return this.http.get(url, {  headers: this.headers() });
  }


  getTop ( id: string ) {
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;

    return this.http.get(url, {  headers: this.headers() }).map( (resp:any) => {
      return resp.tracks;
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
