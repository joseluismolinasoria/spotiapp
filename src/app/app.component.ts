import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  tokenSpotify = null;


  constructor ( private http: HttpClient) {
    console.log ('contructor App');
    this.getTokenSpotify();
  };

  getTokenSpotify () {
    console.log ('getTokenSpotify');

    const url = 'https://accounts.spotify.com/api/token';
    const body = {
      'grant_type' : 'client_credentials',
      'client_id' : '6d35afdf71324ba6a1a5cc5a4740ab57',
      'client_secret': 'b0d0647d449e4b32a3a973ef916881cc'
    };

    console.log ('getTokenSpotify', body);

    // const headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.post(url, body).subscribe ( (res) => {
      console.log ('getTokenSpotify', 'ok', res);
      this.tokenSpotify = res['access_token'];
      console.log ('getTokenSpotify', 'ok', res['access_token']);
    });
  }

}
