/**
 * Create by Tabarino
 * User: itabarino
 * Date: 24/01/20
 * Time: 18:40
 */

import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{ "Title: " + title }}</h2>
        <p>{{ getTitle() }}</p>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"];

    getTitle() {
        return this.title;
    }
}
