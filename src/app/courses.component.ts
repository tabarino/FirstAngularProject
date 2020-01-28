/**
 * Create by Tabarino
 * User: itabarino
 * Date: 24/01/20
 * Time: 18:40
 */

import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: '<h2>{{ "Title: " + title }}</h2><p>{{ getTitle() }}</p>'
})
export class CoursesComponent {
    title = "List of courses";

    getTitle() {
        return this.title;
    }
}
