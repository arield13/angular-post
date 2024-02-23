import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostData } from '../interfaces/post-data.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://localhost:7034/api/post';

  constructor(private http: HttpClient) { }

  getPostsByTag(tag: string, direction?: string, sortBy?: string): Observable<PostData[]> {
    // Construct the API URL with the provided parameters
    let apiUrl = `${this.baseUrl}?tag=${tag}`;
    if (direction)
      apiUrl += `&direction=${direction}`;
    if (sortBy)
      apiUrl += `&sortBy=${sortBy}`;

    // Make the HTTP GET request with the constructed URL
    return this.http.get<PostData[]>(apiUrl).pipe(
      catchError(error => {
        throw  error;
      })
    );
  }
}
