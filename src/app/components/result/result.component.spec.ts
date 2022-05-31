import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ResultComponent } from './result.component';
import { HttpService } from 'src/app/services/http.service';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ResultComponent],
      providers: [HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.debugElement.componentInstance;
    component.pageCount = 1;

  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('page count should increase on pagination next', () => {
    component.onNext();
    expect(component.pageCount).toBe(2);
  });

  it('page count should decrease on pagination previous', () => {
    component.onPrev();
    expect(component.pageCount).toBe(0);
  });
});
