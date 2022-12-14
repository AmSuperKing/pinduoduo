import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Profile } from '../domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<Profile>(`${environment.baseUrl}/profile.json`);
  }

  saveProfile(profile: Profile): Observable<Profile> {
    const headers = { 'Content-Type': 'application/json' };
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    return this.http.post<Profile>(`${environment.baseUrl}/profile.json`, profile, {
      headers
    });
  }
}
