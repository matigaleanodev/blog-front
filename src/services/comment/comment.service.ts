import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private _http = inject(HttpClient);
  private _apiUrl = `${environment.API_URL}/comment`;

  createComment(comment: any) {
    return this._http.post(`${this._apiUrl}`, comment);
  }

  findCommentsByPost(postId: string) {
    return this._http.get(`${this._apiUrl}/${postId}`);
  }

  deleteComment(id: string) {
    return this._http.delete(`${this._apiUrl}/${id}`);
  }
}
