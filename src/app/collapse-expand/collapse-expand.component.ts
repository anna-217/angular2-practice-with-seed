import { Component } from "@angular/core";
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'collapse-component',
    templateUrl: './collapse-expand.component.html',
    styleUrls: ['./collapse-expand.component.css'],
    animations: [
        trigger('collapse', [
            state('show', style({background: 'red' })),
            state('hide', style({background: 'blue'})),
            transition('show <=> hide',                
                animate(1000)
            )
        ])
    ]
})
export class CollapseExpandComponent {
    list: People[] = [
        {
            name: 'chen',
            address: 'rockville',
            age: 17,
            sex: 'F'
        },
        {
            name: 'zhang',
            address: 'rockville',
            age: 19,
            sex: 'F'
        },
        {
            name: 'anna',
            address: 'MD',
            age: 10,
            sex: 'F'
        },
        {
            name: 'Grace',
            address: 'VA',
            age: 18,
            sex: 'F'
        },
        {
            name: 'Time',
            address: 'geithersburg',
            age: 77,
            sex: 'M'
        }
    ];

    collapseState = 'hide';
    toggleState() {
        return this.collapseState == 'show' ? 'hide' : 'show';
    }
}

export interface People {
    name: string;
    address: string;
    age: number;
    sex: string;
}