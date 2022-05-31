import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  txtSearch:string = "";
  @Output() submitClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.submitClicked.emit(this.txtSearch);
  }

}
