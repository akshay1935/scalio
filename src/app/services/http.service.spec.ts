import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from './http.service';
;

describe('HttpService', () => {
  let httpTestingController: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
 
    service = TestBed.get(HttpService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#getData should use GET to retrieve data', () => {
    service.get_by_observable().subscribe();
    const url = `https://api.github.com/search/users?q=abc in:login`;
    const testRequest = httpTestingController.expectOne(url);
 
    expect(testRequest.request.method).toEqual(url);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
