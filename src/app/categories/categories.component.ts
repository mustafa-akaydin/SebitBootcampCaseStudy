import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  commentData :any;
  postId: any;
  postObj: any = {};
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private postService :PostService,
  ) {}
  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.categoryService.getPost(this.postId).subscribe((res) => {
      this.postObj = res;
    });
    this.postService.getPosts().subscribe((res) => {
      this.commentData = res.filter(
        (x: { category_id: any }) => x.category_id == this.postId
        );
      });
    }
}
