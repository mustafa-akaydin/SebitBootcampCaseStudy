import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categoryData: Array<any> = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList() {
    this.categoryService.getPosts().subscribe((res) => {
      this.categoryData = res;
    });
  }
}
