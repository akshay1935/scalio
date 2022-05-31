import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  isLoading: boolean = false;
  httpSubscribe: any;
  searchResult:any = undefined;
  totalSearchResult:any = undefined;
  pageCount: number = 1;
  pageSize: number = 9;
  isPrevDisabled: boolean = false;
  isNextDisabled: boolean = false;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  sort: boolean = false;
  constructor(private _httpService: HttpService) {

  }

  ngOnInit(): void {
  }

  didClicked(e:string){
    this.isLoading = true;
    this.httpSubscribe = this._httpService.get_by_observable(environment.baseURL+`users?q=${e} in:login`).subscribe({
      next: (res) => {
        this.isLoading = false;
        if(res.items !== undefined && res.items.length > 0){
          this.totalSearchResult = res;
          this.searchResult = res.items.slice(this.pageCount,this.pageSize+1);
          this.doSort();          
          this.isPrevDisabled = true;
          this.isNextDisabled = (this.pageSize * this.pageCount) < res.items.length ? false : true;
        }else{
          this.isNextDisabled = true;
          this.isPrevDisabled = true;
          this.searchResult = [];
        }        
      },
      error: (e) => {
        this.isLoading = false;
        console.log("result clicked", e)
      }
   });
  }

  onNext(){
    this.pageCount++;
    if(this.totalSearchResult !== undefined){
      this.searchResult = this.totalSearchResult.items.slice(((this.pageCount-1) * this.pageSize) + 1,(this.pageCount * this.pageSize)+1);
      this.doSort();
      this.isPrevDisabled = this.pageCount > 1 ? false : true;
      this.isNextDisabled = (this.pageSize * this.pageCount) < this.totalSearchResult.items.length ? false : true;
    }else{
      this.isPrevDisabled = true;
      this.isNextDisabled = true;
    }
  }

  onPrev(){
    this.pageCount--;
    if(this.totalSearchResult !== undefined){
      this.searchResult = this.totalSearchResult.items.slice(((this.pageCount-1) * this.pageSize) + 1,(this.pageCount * this.pageSize)+1);
      this.doSort();
      this.isPrevDisabled = this.pageCount > 1 ? false : true;
      this.isNextDisabled = (this.pageSize * this.pageCount) < this.totalSearchResult.items.length ? false : true;
    }else{
      this.isPrevDisabled = true;
      this.isNextDisabled = true;
    }
    
  }

  onChangeSort(){
    this.sort = !this.sort;
    this.doSort();
  }

  doSort(){
    if(this.sort){
      this.searchResult.sort((a: any, b: any) => (a.login > b.login) ? 1 : -1);
    }else{
      this.searchResult.sort((a: any, b: any) => (a.login < b.login) ? 1 : -1);
    }
  }

}
