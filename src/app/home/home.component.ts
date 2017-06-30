import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { Store } from "@ngrx/store";
import { State, INCREMENT } from "../calculator/calculator.redux";

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
@Output() update = new EventEmitter<number>();

number = 10;
  constructor(public appState: AppState,private store: Store<State>) {
    store.select('calReducer').subscribe((data:State)=>{
      this.number = data.counter;
    });

  }

  increment(){
   // this.store.dispatch({type: INCREMENT, payload:{innerObj:{text:"derp!"}}});
   this.update.emit(this.number);
  }
}
