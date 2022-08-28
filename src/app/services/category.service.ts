import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }
  public getPosts() {
    return this.base.getReq('/categories');
  }
  public getPost(postId: any) {
    return this.base.getReq('/categories/' + postId);
  }
}
