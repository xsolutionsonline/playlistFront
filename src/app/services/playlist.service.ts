import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayList } from '../models/PlayList';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private BASE_URL = 'http://localhost:8080/lists';

  constructor(private http: HttpClient,
              private userService: UserService) {}

  
  createPlaylist(playlist: PlayList): Observable<PlayList> {
    
    const token = this.userService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.post<PlayList>(`${this.BASE_URL}`, playlist, { headers });
  }

  getAllPlaylists(): Observable<any> {
    const token = this.userService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.BASE_URL, { headers });
  }

  searchPlaylistByName(playlistName: string): Observable<any> {
    const token = this.userService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.BASE_URL}/${playlistName}`,{ headers });
  }

  deletePlaylist(playlistName: string): Observable<any> {
    const token = this.userService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.BASE_URL}/${playlistName}`,{ headers });
  }
}
