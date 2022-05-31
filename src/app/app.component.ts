import { Component, ViewChild } from '@angular/core';
import { ResultComponent } from './components/result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scalio';
  @ViewChild('resultComp')
  resultComp: ResultComponent;
  
  submitClicked(e: string){
    this.resultComp.didClicked(e)
  }
}
