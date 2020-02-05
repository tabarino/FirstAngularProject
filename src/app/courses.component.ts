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
        <div>
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

            <br>
            <p>{{ course.title | uppercase }}</p>
            <p>{{ course.students | number }}</p>
            <p>{{ course.rating | number:'1.2-2' }}</p>
            <p>{{ course.price | currency:'EUR':true:'3.2-2' }}</p>
            <p>{{ course.releaseDate | date:'mediumDate' }}</p>
            
            <br>

            <p>{{ text | summary:22 }}</p>

            <br>

            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

            <br><br>

            <div (click)="onDivClicked()">
                <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActiveBackground ? 'blue' : 'gray'">Save</button>
            </div>
        </div>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://picsum.photos/600/400";
    colSpan = 2;
    isActive = true;
    isActiveBackground = true;
    email = 'me@example.com';
    courses;
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolorem error provident, impedit debitis autem dolor, fugit similique laudantium facilis harum culpa iure ipsam et, ullam sit obcaecati officia a!';

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

    onKeyUp() {
        console.log('ENTER was pressed');
        console.log(this.email);
    }
}
