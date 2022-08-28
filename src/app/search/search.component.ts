import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData:Array<any> =[];

  constructor(private searchService: SearchService) { }
  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList() {
    this.searchService.getSearch().subscribe((res) => {
      this.searchData = res;
    });
    
  }
}
