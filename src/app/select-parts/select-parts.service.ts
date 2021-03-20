import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Part} from './part'

@Injectable({
  providedIn: 'root'
})
export class SelectPartsService {

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();

  constructor() { }

  // changeParam(param: any[]) {
  //   this.paramSource.next(param)
  // }
  
}
