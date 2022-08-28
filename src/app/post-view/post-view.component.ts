import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  commentData :any;
  commentId: any;
  postObj: any = {};
  constructor(
    private route: ActivatedRoute,
    private postService :PostService,
  ) {}
  ngOnInit(): void {
    this.commentId = this.route.snapshot.paramMap.get('commentId');
    this.postService.getPost(this.commentId).subscribe((res) => {
      this.postObj = res;
    });
    }
}
