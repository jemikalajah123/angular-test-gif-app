import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  result: any = [];
  data: string;
  query: any;
  url1 = 'https://api.giphy.com/v1/gifs/search?q=';
  url2 = '&api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=5';

  constructor(private http: HttpClient) { }
  search(q) {
    console.log(q);
    this.query = q;
    console.log(this.query);
    return this.http.get(this.url1 + this.query + this.url2);
  }

}
