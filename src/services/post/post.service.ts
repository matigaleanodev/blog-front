import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _http = inject(HttpClient);
  private _apiUrl = `${environment.API_URL}/post`;

  createPost(post: any) {
    return this._http.post(`${this._apiUrl}`, post);
  }

  findAllPosts() {
    return this._http.get(`${this._apiUrl}`);
  }

  findPostById(id: string) {
    return this._http.get(`${this._apiUrl}/${id}`);
  }

  updatePost(id: string, post: any) {
    return this._http.patch(`${this._apiUrl}/${id}`, post);
  }

  deletePost(id: string) {
    return this._http.delete(`${this._apiUrl}/${id}`);
  }
}
