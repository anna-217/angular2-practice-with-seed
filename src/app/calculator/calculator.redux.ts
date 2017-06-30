import {ActionReducer, Action} from "@ngrx/store";
import { Injectable } from "@angular/core";
import {Effect, Actions, toPayload} from "@ngrx/effects"
import {Observable} from "rxjs";

export interface State {
    counter: number;
}

export const initialState : State = {
    counter :1
}


export const INCREMENT : string = 'INCREMENT';
export const EVENT_FROM_EFFECT:string = 'EVENT_FROM_EFFECT';

export const calReducer: ActionReducer<State> = 
    (state = initialState, action :Action)=>{
        switch(action.type) {
            case INCREMENT: {
        console.log('Increment action being handled!');
        return {
          counter: state.counter + 1
        }
      }
      case EVENT_FROM_EFFECT: {
        console.log('we cheesin in the reducer over here!');
        return {
          counter: 4
        }
      }
      default: {
        return state;
      }
    }
 };

@Injectable()
 export class CalEffects {
    constructor(private action$: Actions) { }

    @Effect() update$ = this.action$
    .ofType(INCREMENT)
    .map(toPayload)
    .switchMap( () =>
      Observable.of({type: "INCREMENT"})
    );
 }
    