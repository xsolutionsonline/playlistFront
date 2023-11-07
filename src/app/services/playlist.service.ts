import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayList } from '../models/PlayList';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private tokenKey = 'auth_token';

  private BASE_URL = 'http://localhost:8080/lists';
  private LOGIN_ENDPOINT = '/lists';
  private REGISTER_ENDPOINT = '/register';
  constructor(private http: HttpClient,
              private userService: UserService) {}

  
  createPlaylist(playlist: PlayList): Observable<PlayList> {
    debugger
    const token = this.userService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.post<PlayList>(`${this.BASE_URL}`, playlist, { headers });
  }

  getAllPlaylists(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

  searchPlaylistByName(playlistName: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${playlistName}`);
  }

  deletePlaylist(playlistName: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${playlistName}`);
  }
}
