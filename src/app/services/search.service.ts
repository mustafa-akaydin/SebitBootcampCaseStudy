import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }
  public getSearch() {
    return this.base.getReq('/posts');
  }
}
