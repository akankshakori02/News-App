import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  //private apiKey = process.env.API_KEY 
  private apiUrl = 'https://newsdata.io/api/1/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    const url = `${this.apiUrl}?apikey=pub_760103d6e5022270fc0ffbf54d99c790a5344&language=en`;
    //https://newsdata.io/api/1/archive?apikey=pub_760103d6e5022270fc0ffbf54d99c790a5344&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25
    return this.http.get(url);
  }
}