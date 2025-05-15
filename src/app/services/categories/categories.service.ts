import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { GetCategoriesResponse } from 'src/app/models/interfaces/categories/responses/GetCategoriesResponse';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private API_URL = enviroment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  }

  constructor(
    private httpClient: HttpClient,
    private cookie: CookieService,

  ) { }

  getAllCategories(): Observable<Array<GetCategoriesResponse>> {
    return this.httpClient.get<Array<GetCategoriesResponse>>(
      `${this.API_URL}/categories`,
      this.httpOptions
    )
  }

  createNewCategory(requestDatas: { name: string }): Observable<Array<GetCategoriesResponse>> {
    return this.httpClient.post<Array<GetCategoriesResponse>>(
      `${this.API_URL}/category`,
      requestDatas,
      this.httpOptions
    )
  }

  deleteCategory(requestDatas: { category_id: string }): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.API_URL}/category/delete`, {
      ...this.httpOptions,
      params: {
        category_id: requestDatas.category_id
      }
    }
    )
  }
}
