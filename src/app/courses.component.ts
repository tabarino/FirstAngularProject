/**
 * Create by Tabarino
 * User: itabarino
 * Date: 24/01/20
 * Time: 18:40
 */

import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses>
    template: `
        <div (click)="onDivClicked()">
            <h2>{{ "Title: " + title }}</h2>
            <p>{{ getTitle() }}</p>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
            <img [src]="imageUrl" />
            <table>
                <tr>
                    <td [attr.colspan]="colSpan"></td>
                </tr>
            </table>
            <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActiveBackground ? 'blue' : 'gray'">Save</button>
        </div>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://picsum.photos/600/400";
    colSpan = 2;
    isActive = true;
    isActiveBackground = true;
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        // Stop Event Bubbling
        $event.stopPropagation();

        alert('Saved');
        console.log($event);
    }

    onDivClicked() {
        alert('Div was clicked');
    }
}
