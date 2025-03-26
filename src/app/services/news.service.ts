import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Import environment

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://newsdata.io/api/1/news';

  constructor(private http: HttpClient) {}

  getNews(
    searchTerm: string = '',
    category: string = '',
    country: string = 'us'
  ): Observable<any> {
    // Use the environment variable
    let params = new HttpParams().set('apikey', environment.newsApiKey);

    if (searchTerm) params = params.set('q', searchTerm);
    if (category) params = params.set('category', category);
    if (country) params = params.set('country', country);

    return this.http.get(this.apiUrl, { params });
  }
}