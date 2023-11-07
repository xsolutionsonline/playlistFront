import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private BASE_URL = 'http://localhost:8080/auth'; // URL base de la API de Spotify
  private GENRES_ENDPOINT = '/get-spotify-genres';
  constructor(private http: HttpClient,
    private userService: UserService) {}

  getSpotifyGenres(): Observable<any> {
    const token = this.userService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.BASE_URL + this.GENRES_ENDPOINT, { headers });
  }
}
