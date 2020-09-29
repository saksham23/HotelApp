import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '../_models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.baseUrl + 'hotel');
  }

  getHotel(id: number): Observable<Hotel>{
    return this.http.get<Hotel>(this.baseUrl + 'hotel/' + id);
  }

}
