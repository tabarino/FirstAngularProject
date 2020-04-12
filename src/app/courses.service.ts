import { Injectable } from '@angular/core';
/**
 * Create by Tabarino
 * User: itabarino
 * Date: 28/01/20
 * Time: 22:50
 */

@Injectable()
export class CoursesService {
    getCourses() {
        return ['course1', 'course2', 'course3'];
    }
}
