import { Injectable } from '@angular/core';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class Test2Service extends TestService{

  constructor() {
    super();
  }
}
